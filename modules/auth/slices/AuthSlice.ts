import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../common/interfaces/auth.interface';
import { removeAuth, setAuth } from '../../../common/helpers/authHelper';
import { AuthService } from '../../../services/AuthService';


interface AuthState {
  currentUser: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isRemembered: boolean;
  error: string | null | undefined;
  token: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: false,
  isRemembered: false,
  error: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteAuth: (state) => {
      removeAuth();
      (state.currentUser = null),
        (state.isAuthenticated = false),
        (state.isLoading = false),
        (state.error = null),
        (state.token = null);
    },
    toggleRemembered: (state) => {
      state.isRemembered = !state.isRemembered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthService().login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(AuthService().login.fulfilled, (state, action) => {
        state.isLoading = false;
        
        if (action.payload.user) {
          state.isAuthenticated = true;
          state.currentUser = action.payload.user;
          state.token = action.payload.jwt;
          setAuth(action.payload, state.isRemembered);
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(AuthService().login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.currentUser = null;
        state.token = null;
      })
  },
});

export const { deleteAuth, toggleRemembered } = authSlice.actions;
export default authSlice.reducer;
