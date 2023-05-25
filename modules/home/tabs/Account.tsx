import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { navigate } from '../../auth/Login';
import { deleteAuth } from '../../auth/slices/AuthSlice';
import { useAppDispatch } from '../../../common/hooks/redux-hooks';

const Account = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    navigate('Login');
    dispatch(deleteAuth());
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogout} className="bg-primary p-20">
        <Text>Logout</Text>
      </TouchableOpacity>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
