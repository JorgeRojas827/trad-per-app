import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { IRestaurant } from '../../../common/interfaces/restaurant.interface';

interface IProps {
  index: number;
  restaurant: IRestaurant;
}

export const SingleRestaurant: FC<IProps> = ({ restaurant, index }) => {
  console.log(restaurant);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={
        index === 0
          ? 'mt-0 flex relative w-full rounded-xl'
          : 'mt-5 flex relative w-full rounded-xl'
      }
    >
      <Image
        source={{
          uri: restaurant.attributes.banner.data.attributes.url,
          width: 328,
          height: 118,
        }}
      />
      <Text className="absolute bottom-3 left-5 text-white z-10 font-montserrat-bold text-lg">
        {restaurant.attributes.name}
      </Text>
      <Text className="absolute top-3 right-5 bg-white text-backgroundInput z-10 font-montserrat-semibold text-xs px-2 rounded-3xl">
        {restaurant.attributes.average_ship}
      </Text>
      <View className="absolute top-0 left-0 bg-black/50 rounded-xl w-full h-full"></View>
    </TouchableOpacity>
  );
};
