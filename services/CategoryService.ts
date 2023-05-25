import { isAxiosError } from 'axios';

import { apiUrl } from '../common/utils/axios';
import { IListCategoryResponse } from '../common/interfaces/category.interface';

export const CategoryService = () => {
    const listCategories =  async () => {
        try {
          return (
            await apiUrl.get<IListCategoryResponse>('/categories')
          ).data;
        } catch (error) {
          if (isAxiosError(error)) {
            return error.response?.data;
          }
        }
      };
      
  return {
    listCategories
  }
}
