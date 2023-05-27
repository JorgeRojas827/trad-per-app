import React, { FC, useState } from 'react';
import { View, ScrollView } from 'react-native';
import SingleCategory from './SingleCategory';
import { useQuery } from '@tanstack/react-query';
import { CategoryService } from '../../../../services/CategoryService';
import { IListCategoryResponse } from '../../../../common/interfaces/category.interface';

interface IProps {
  categorySelected: string;
  setCategorySelected: any;
}

const CategoryList: FC<IProps> = ({
  categorySelected,
  setCategorySelected,
}) => {
  const {
    data: categories,
    isLoading,
    isFetching,
    isError,
  } = useQuery<IListCategoryResponse>(
    ['list/categories'],
    async () => await CategoryService().listCategories()
  );

  return (
    <View>
      <ScrollView
        className="flex space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {(!isLoading || !isFetching) &&
          !isError &&
          categories?.data &&
          categories?.data.map((category) => {
            return (
              <SingleCategory
                key={category.id}
                setCurrentSelected={setCategorySelected}
                selected={categorySelected}
                category={category}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default CategoryList;
