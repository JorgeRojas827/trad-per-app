import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { IListRestaurantResponse } from '../../../../common/interfaces/restaurant.interface';
import { RestaurantService } from '../../../../services/RestaurantService';
import { SingleRestaurant } from './SingleRestaurant';
import { Ionicons } from '@expo/vector-icons';

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

  if (
    (!isLoading || !isFetching) &&
    !isError &&
    restaurants?.data &&
    restaurants?.data
      .filter((e) =>
        e.attributes.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((e) =>
        e.attributes.categories.data
          .map((e) => e.attributes.title)
          .includes(categorySelected)
      ).length === 0
  ) {
    return (
      <View className="w-full h-full items-center pt-36 flex flex-col">
        <Ionicons name="sad-outline" size={24} />
        <Text>No se encontraron restaurantes</Text>
      </View>
    );
  }

  return (
    <View className="w-full">
      {(!isLoading || !isFetching) &&
        !isError &&
        restaurants?.data &&
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
    </View>
  );
};

export default RestaurantList;
