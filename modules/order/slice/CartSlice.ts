import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../common/interfaces/product.interface';


export interface ICartProduct extends IProduct {
  quantity: number;
}

interface ICartState {
  products: ICartProduct[]
  totalItems: number;
}


const initialState: ICartState = {
  totalItems: 0,
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<ICartProduct>) => {
      const findedProduct = state.products.find(product => product.id === payload.id);
      if (!findedProduct) {
        state.products.push(payload);
      } else {
        findedProduct.quantity += payload.quantity;
      }
      state.totalItems += payload.quantity;
      console.log(state);
      
    },
    removeProduct: (state, { payload }: PayloadAction<ICartProduct>) => {
      const findedProduct = state.products.find(product => product.id === payload.id);
      if (!findedProduct) {
        return;
      } 

      if (findedProduct.quantity === 1) {
        state.products = state.products.filter(product => product.id!== payload.id);
      }
      findedProduct.quantity -= payload.quantity;
      state.totalItems -= payload.quantity;
      console.log(state);
      
    }
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
