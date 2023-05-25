import { isAxiosError } from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit'
import { apiUrl } from '../common/utils/axios';
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '../common/interfaces/auth.interface';

export const AuthService = () => {
    const login = createAsyncThunk('auth/login', async (values: ILoginRequest) => {
        try {
          return (
            await apiUrl.post<ILoginResponse>('/auth/local', {
              ...values,
            })
          ).data;
        } catch (error) {
          if (isAxiosError(error)) {
            return error.response?.data;
          }
        }
      });
      
    const register = createAsyncThunk('auth/register', async (values: IRegisterRequest) => {
        try {
          return (
            await apiUrl.post<IRegisterResponse>('/auth/local/register', {
              ...values,
            })
          ).data;
        } catch (error) {
          if (isAxiosError(error)) {
            return error.response?.data;
          }
        }
      });
  return {
    login,
    register
  }
}
