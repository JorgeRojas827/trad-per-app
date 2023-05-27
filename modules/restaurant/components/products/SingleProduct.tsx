import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IProduct } from '../../../../common/interfaces/product.interface';

interface IProps {
  product: IProduct;
  position: number;
}

const SingleProduct: FC<IProps> = ({ product, position }) => {
  return (
    <View
      className={
        'bg-[#D93939] flex space-y-4 pb-4 pt-8 rounded-xl px-5 flex-col justify-center items-center ' +
        ([0, 1].includes(position) ? 'mt-28' : 'mt-32')
      }
    >
      <Image
        source={{
          uri: product.attributes.image.data[0].attributes.url,
          width: 150,
          height: 150,
        }}
        className="rounded-b-lg absolute -top-28"
      />
      <Text className="text-white w-[78px] font-montserrat-semibold text-base text-center">
        {product.attributes.title}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-[#FF5757] flex flex-row rounded-full px-1 items-center py-1"
      >
        <Ionicons name="remove-outline" color="#fff" size={22} />
        <Text className="text-white font-montserrat-semibold text-base">
          S/. {Number(product.attributes.price).toFixed(2)}
        </Text>
        <Ionicons name="add" color="#fff" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default SingleProduct;
