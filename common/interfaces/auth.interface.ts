type TAuthResponse = {
  jwt: string;
  user: IUser
}

export type ILoginResponse  = TAuthResponse
export type IRegisterResponse  = TAuthResponse
  
export interface IUser {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}

export interface ILoginRequest {
  identifier: string;
  password: string;
}

export interface IRegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface IAuthError {
  status: number;
  name: string;
  message: string;
  details: object
}

export interface IAuthErrorResponse {
  data: null;
  error: IAuthError;
}