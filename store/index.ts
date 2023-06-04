import {configureStore} from '@reduxjs/toolkit'

import authReducer from '../modules/auth/slices/AuthSlice'
import cartReducer from '../modules/order/slice/CartSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer, 
    cart: cartReducer, 
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch