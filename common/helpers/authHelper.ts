/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AxiosInstance, InternalAxiosRequestConfig, isAxiosError } from 'axios';
import SyncStorage from 'sync-storage'
import { ILoginResponse } from '../interfaces/auth.interface';

const AUTH_LOCAL_STORAGE_KEY = 'auth-react-storage';

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  } else {
    return false;
  }
}

const getAuth = (): ILoginResponse | undefined => {
  if (!SyncStorage) {
    return;
  }

  const lsValue: string | null = SyncStorage.get(AUTH_LOCAL_STORAGE_KEY);

  if (!lsValue) {
    return;
  }
  try {
    const auth: ILoginResponse = JSON.parse(lsValue) as ILoginResponse;
    if (auth) {
      // You can easily check auth_token expiration also
      return auth;
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error);
  }
};

const setAuth = (auth: ILoginResponse, isRemembered: boolean) => {
  if (!SyncStorage) {
    return;
  }

  try {
    const lsValue = JSON.stringify(auth);
    SyncStorage.set(AUTH_LOCAL_STORAGE_KEY, lsValue);
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error);
  }
};

const removeAuth = () => {
  if (!SyncStorage) {
    return;
  }

  try {
    SyncStorage.remove(AUTH_LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error);
  }
};

const refreshAuth = (authorization: string) => {
  const token = authorization.substring(7, authorization.length);

  if (!SyncStorage) {
    return;
  }

  try {
    const lsValue = JSON.parse(SyncStorage.get(AUTH_LOCAL_STORAGE_KEY)!);
    lsValue.jwt = token;
    setAuth(lsValue as ILoginResponse, false);
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error);
  }
};

export function setupAxios(axios: AxiosInstance) {
  axios.defaults.headers.Accept = 'application/json';
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const auth = getAuth();
      
      if (auth && auth.jwt) {
        config.headers.Authorization = `Bearer ${auth.jwt}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    (response) => {
            if (response.headers.authorization) {
              refreshAuth(response.headers.authorization);
            }
            return response;
          },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          // Clear the expired token and redirect to the login page
  
          setTimeout(() => {
            SyncStorage.remove('token');
            document.cookie = `${AUTH_LOCAL_STORAGE_KEY}=; Path=/;`;
            SyncStorage.remove(AUTH_LOCAL_STORAGE_KEY);
            window.location.href = '/';
          }, 1000);
        }
        if (error.response.status === 403) {
          console.error('no tienes permisos');
        }
        if (error.response.status === 404) {
          console.error('error del servidor');
        }
        if (error.response.status === 500) {
          console.error('error del servidor');
        }
      }

      return Promise.reject(error);
    }
  );
}

export function setupNoTokenAxios(axios: AxiosInstance) {
  axios.defaults.headers.Accept = 'application/json';
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export function hideEmail(email: string) {
  const parts = email.split("@");
  const username = parts[0];
  let hidden = username.charAt(0);

  for (let i = 1; i < 5; i++) {
    hidden += "*";
  }

  return hidden + username.slice(username.length - 2,  username.length)  +  "@" + parts[1];
}


export { AUTH_LOCAL_STORAGE_KEY, getAuth, removeAuth, setAuth };
