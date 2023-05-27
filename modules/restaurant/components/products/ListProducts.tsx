import { useQuery } from '@tanstack/react-query';
import React, { FC } from 'react';
import { IProductByRestaurantResponse } from '../../../../common/interfaces/product.interface';
import { ProductService } from '../../../../services/ProductService';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView } from 'react-native';
import SingleProduct from './SingleProduct';

interface IProps {
  id_restaurant: number;
}

export const ListProducts: FC<IProps> = ({ id_restaurant }) => {
  const {
    data: products,
    isLoading,
    isFetching,
    isError,
  } = useQuery<IProductByRestaurantResponse>(
    ['get/product/restaurant'],
    async () => await ProductService().listProductsByRestaurant(id_restaurant)
  );

  console.log({ products });

  const renderProduct =
    (!isLoading || !isFetching) && !isError && products?.data.length === 0;

  if (renderProduct) {
    <View className="w-full h-full items-center pt-36 flex flex-col">
      <Ionicons name="sad-outline" size={24} />
      <Text>No se encontraron restaurantes</Text>
    </View>;
  }

  return (
    <View className="px-6 flex flex-col space-y-3">
      <Text className="font-montserrat-bold left-4 text-xl text-backgroundInput">
        Productos
      </Text>
      <View className="flex flex-row px-2 flex-wrap w-full space-y-5 flex-grow justify-between space-x-5">
        {(!isLoading || !isFetching) &&
          !isError &&
          products?.data.length !== 0 &&
          products?.data.map((product, index) => {
            return (
              <SingleProduct
                key={product.id}
                position={index}
                product={product}
              />
            );
          })}
      </View>
    </View>
  );
};
