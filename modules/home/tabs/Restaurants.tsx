import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CategoryList from '../components/CategoryList';
import RestaurantList from '../components/RestaurantList';
import { SearchInput } from '../components/SearchInput';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../common/hooks/redux-hooks';
import { navigate } from '../../auth/Login';
import { deleteAuth } from '../../auth/slices/AuthSlice';

const Restaurants = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [search, setSearch] = useState('');
  const [categorySelected, setCategorySelected] = useState<string>('Criollos');

  return (
    <View style={styles.container} className="p-6 flex flex-col space-y-5">
      <View className="flex flex-row items-center justify-between">
        <Text className="font-montserrat-bold text-textColor text-xl">
          ¡Hola, {currentUser?.username}!
        </Text>
        <TouchableOpacity activeOpacity={0.8} className="relative">
          <View className="absolute -top-2 -right-3">
            <View className="bg-primary rounded-full w-4 h-4 flex justify-center items-center">
              <Text className="font-montserrat-bold text-[8px] text-white">
                3
              </Text>
            </View>
          </View>
          <Ionicons name="cart-outline" size={24} className="text-textColor" />
        </TouchableOpacity>
      </View>
      <View>
        <SearchInput
          setSearch={setSearch}
          search={search}
          placeholder="Buscar restaurante"
        >
          <Ionicons
            name="search-outline"
            size={24}
            className="text-[#24292E]"
          />
        </SearchInput>
      </View>
      <View>
        <CategoryList
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      </View>
      <View className="w-full">
        <RestaurantList search={search} categorySelected={categorySelected} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default Restaurants;
