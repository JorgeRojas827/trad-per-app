import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

interface IProps {
  title: string;
  clickHandler: any;
  loader?: boolean;
}

const AuthButton = ({ title, clickHandler, loader }: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={clickHandler}
      disabled={loader}
      className="bg-primary flex-row space-x-5 flex justify-center py-3 items-center rounded-xl"
    >
      {loader && <ActivityIndicator color="#FABBBB" />}

      <Text className="text-white font-montserrat-bold ">{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
