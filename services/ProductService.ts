import { isAxiosError } from 'axios';

import { apiUrl } from '../common/utils/axios';
import { IProductByRestaurantResponse } from '../common/interfaces/product.interface';
import { useQuery } from '@tanstack/react-query';

export const ProductService = () => {

    const getProductById = async (product_id: number | string) => {
    
        try {
            return (
            await apiUrl.get<IProductByRestaurantResponse>('/products?populate=*&filters[id][$contains]=' + product_id)
            ).data;
        } catch (error) {
            if (isAxiosError(error)) {
            return error.response?.data;
            }
        }
    }

    const listProductsByRestaurant =  async (restaurant_id: number | string) => {
        try {
          return (
            await apiUrl.get<IProductByRestaurantResponse>('/products?populate=*&filters[restaurant][id][$contains]=' + restaurant_id)
          ).data;
        } catch (error) {
          if (isAxiosError(error)) {
            return error.response?.data;
          }
        }
      };
      
  return {
    listProductsByRestaurant,
    getProductById
  }
}
