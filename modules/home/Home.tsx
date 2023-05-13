import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useAppDispatch } from '../../common/hooks/redux-hooks';
import { deleteAuth } from '../auth/slices/AuthSlice';
import { navigate } from '../auth/Login';

const Home = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    navigate('Login');
    dispatch(deleteAuth());
  };
  return (
    <View style={styles.container} className="">
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout} className="bg-primary p-20">
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default Home;
