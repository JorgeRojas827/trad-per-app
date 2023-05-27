import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { IRestaurant } from '../../common/interfaces/restaurant.interface';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';
import { navigate } from '../auth/Login';
import OutstandingProduct from './components/products/OutstandingProduct';
import { IProduct } from '../../common/interfaces/product.interface';
import { ListProducts } from './components/products/ListProducts';
import { ScrollView } from 'react-native';

const RestaurantView = ({ route }: any) => {
  const restaurant = route.params.restaurant as IRestaurant;

  return (
    <View style={styles.container} className="flex flex-col">
      <View
        style={{ elevation: 5, shadowColor: 'rgba(0, 0, 0, 0.30)' }}
        className="flex justify-center bg-white items-center relative"
      >
        <View style={{ position: 'relative' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('Home')}
            className="absolute z-50 top-6 left-4 rounded-full p-1.5 flex justify-center items-center bg-[#24292E]/[0.91]"
          >
            <Ionicons name="chevron-back" color={'#ffffff'} size={28} />
          </TouchableOpacity>
          <Image
            source={{
              uri: restaurant.attributes.banner_single.data.attributes.url,
              width: Dimensions.get('window').width,
              height: 200,
            }}
            className="rounded-b-lg"
          />

          <View className="absolute top-0 left-0 bg-black/50 rounded-b-xl w-full h-full"></View>
          <View className="absolute bottom-6 left-6 right-6 flex flex-row items-end justify-between">
            <Text className="font-montserrat-bold text-white text-2xl">
              {restaurant.attributes.name}
            </Text>
            <Text className="font-montserrat-bold text-white text-[8px]">
              {restaurant.attributes.location}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView className="flex flex-col space-y-6">
        <View className="mt-6">
          <OutstandingProduct
            id_product={restaurant.attributes.outstanding_product.data.id}
          />
        </View>
        <View className="pb-6">
          <ListProducts id_restaurant={restaurant.id} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default RestaurantView;
