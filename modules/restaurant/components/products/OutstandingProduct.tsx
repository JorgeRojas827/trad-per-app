import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { IProduct } from '../../../../common/interfaces/product.interface';
import { ProductService } from '../../../../services/ProductService';
import {
  IProductData,
  IProductIdResponse,
} from '../../../../common/interfaces/restaurant.interface';
import { useQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
  id_product: number;
}
const OutstandingProduct: FC<IProps> = ({ id_product }) => {
  const {
    data: product,
    isLoading,
    isFetching,
    isError,
  } = useQuery<IProductIdResponse>(
    ['show/product'],
    async () => await ProductService().getProductById(id_product),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const renderProduct = (!isLoading || !isFetching) && !isError && !product;

  if (renderProduct) {
    <View className="w-full h-full items-center pt-36 flex flex-col">
      <Ionicons name="sad-outline" size={24} />
      <Text>No se encontraron restaurantes</Text>
    </View>;
  }

  return (
    <View>
      <View className="px-6 flex flex-col space-y-3">
        <Text className="font-montserrat-bold left-4 text-xl text-backgroundInput">
          Destacado del día
        </Text>
        {(!isLoading || !isFetching) && !isError && product && (
          <View className="bg-[#FF5757] rounded-3xl flex flex-col items-start justify-center space-y-2 relative px-6 py-4 pb-5 w-3/4">
            <Text className="text-white font-montserrat-semibold text-lg">
              {product.data[0].attributes.title}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-[#D93939] flex flex-row rounded-full px-3 items-center py-1"
            >
              <Ionicons name="add" color="#fff" size={22} />
              <Text className="text-white font-montserrat-semibold text-base">
                S/. {Number(product.data[0].attributes.price).toFixed(2)}
              </Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: product.data[0].attributes.image.data[0].attributes.url,
                width: 150,
                height: 150,
              }}
              className="rounded-b-lg absolute -right-24"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default OutstandingProduct;
