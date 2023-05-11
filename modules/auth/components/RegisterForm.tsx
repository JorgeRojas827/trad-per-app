import React from 'react';
import { Text, View } from 'react-native';
import { AuthInput } from './AuthInput';
import { Ionicons } from '@expo/vector-icons';
import AuthButton from './AuthButton';

export const RegisterForm = () => {
  return (
    <View className="bg-white w-full h-full flex justify-around pb-5 px-14 flex-col">
      <View>
        <View className="pt-3">
          <AuthInput
            label="Correo electrónico"
            name="email"
            placeholder="Ingrese su correo"
          >
            <Ionicons name="mail-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
        <View className="pt-5">
          <AuthInput
            label="Contraseña"
            name="email"
            placeholder="Ingrese su contraseña"
          >
            <Ionicons name="key-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
        <View className="pt-5">
          <AuthInput
            label="Nombre de usuario"
            name="email"
            placeholder="Ingrese su nombre"
          >
            <Ionicons name="person-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
      </View>
      <View className="justify-self-end">
        <AuthButton title="REGISTRARSE" />
      </View>
    </View>
  );
};
