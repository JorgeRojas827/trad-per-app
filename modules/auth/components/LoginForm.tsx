import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthInput } from './AuthInput';
import { Ionicons } from '@expo/vector-icons';
import AuthButton from './AuthButton';
import useAuthentication from '../hook/useAuthentication';

export const LoginForm = () => {
  const { forms, loaders, submitHandlers } = useAuthentication();

  return (
    <View className="bg-white w-full h-full flex justify-around pb-10 px-14 flex-col">
      <View>
        <View>
          <AuthInput
            label="Correo electrónico"
            name="identifier"
            placeholder="Ingrese su correo"
            formControl={forms.loginForm.control}
            error={forms.loginForm.formState.errors}
          >
            <Ionicons name="mail-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
        <View className="pt-5">
          <AuthInput
            label="Contraseña"
            name="password"
            placeholder="Ingrese su contraseña"
            formControl={forms.loginForm.control}
            error={forms.loginForm.formState.errors}
            password
          >
            <Ionicons name="key-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
      </View>
      <View className="justify-self-end">
        <AuthButton
          clickHandler={forms.loginForm.handleSubmit(
            submitHandlers.submitLogin
          )}
          title="INGRESAR"
          loader={loaders.loadLogin}
        />
      </View>
    </View>
  );
};
