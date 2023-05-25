import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { IListRestaurantResponse } from '../../../common/interfaces/restaurant.interface';
import { RestaurantService } from '../../../services/RestaurantService';
import { SingleRestaurant } from './SingleRestaurant';

interface IProps {
  search: string;
  categorySelected: string;
}

const RestaurantList: FC<IProps> = ({ search, categorySelected }) => {
  const {
    data: restaurants,
    isLoading,
    isFetching,
    isError,
  } = useQuery<IListRestaurantResponse>(
    ['list/restaurants'],
    async () => await RestaurantService().listRestaurants(),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <View className="w-full">
      {(!isLoading || !isFetching) &&
        !isError &&
        restaurants &&
        restaurants?.data
          .filter((e) =>
            e.attributes.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((e) =>
            e.attributes.categories.data
              .map((e) => e.attributes.title)
              .includes(categorySelected)
          )
          .map((restaurant, index) => {
            return (
              <SingleRestaurant
                restaurant={restaurant}
                index={index}
                key={restaurant.id}
              />
            );
          })}
      {(!isLoading || !isFetching) &&
        !isError &&
        restaurants &&
        restaurants?.data.filter((e) =>
          e.attributes.name.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && <Text>No se encontraron restaurantes</Text>}
    </View>
  );
};

export default RestaurantList;
