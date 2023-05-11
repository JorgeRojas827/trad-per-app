import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';

interface IProps {
  title: string;
}

const AuthButton = ({ title }: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-primary flex justify-center py-3 items-center rounded-xl"
    >
      <Text className="text-white font-montserrat-bold ">{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
