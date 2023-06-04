import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../common/hooks/redux-hooks';
import {
  ICartProduct,
  addProduct,
  removeProduct,
} from '../../order/slice/CartSlice';

export const useShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { totalItems, products } = useAppSelector((state) => state.cart);

  const addToCart = (product: ICartProduct) => {
    dispatch(addProduct(product));
  };
  const removeFromCart = (product: ICartProduct) => {
    dispatch(removeProduct(product));
  };

  return {
    addToCart,
    removeFromCart,
    totalItems,
    products,
  };
};
