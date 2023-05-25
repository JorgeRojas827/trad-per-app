import { isAxiosError } from 'axios';

import { apiUrl } from '../common/utils/axios';
import { IListRestaurantResponse } from '../common/interfaces/restaurant.interface';

export const RestaurantService = () => {
    const listRestaurants =  async () => {
        try {
          return (
            await apiUrl.get<IListRestaurantResponse>('/restaurants?populate=*')
          ).data;
        } catch (error) {
          if (isAxiosError(error)) {
            return error.response?.data;
          }
        }
      };
      
  return {
    listRestaurants
  }
}
