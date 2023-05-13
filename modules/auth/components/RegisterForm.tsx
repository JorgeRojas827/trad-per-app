import React from 'react';
import { Text, View } from 'react-native';
import { AuthInput } from './AuthInput';
import { Ionicons } from '@expo/vector-icons';
import AuthButton from './AuthButton';
import useAuthentication from '../hook/useAuthentication';

export const RegisterForm = () => {
  const { forms, loaders, submitHandlers } = useAuthentication();

  return (
    <View className="bg-white w-full h-full flex justify-around pb-5 px-14 flex-col">
      <View>
        <View className="pt-3">
          <AuthInput
            label="Correo electrónico"
            name="email"
            formControl={forms.registerForm.control}
            error={forms.registerForm.formState.errors}
            placeholder="Ingrese su correo"
          >
            <Ionicons name="mail-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
        <View className="pt-5">
          <AuthInput
            label="Contraseña"
            formControl={forms.registerForm.control}
            error={forms.registerForm.formState.errors}
            name="password"
            placeholder="Ingrese su contraseña"
            password
          >
            <Ionicons name="key-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
        <View className="pt-5">
          <AuthInput
            label="Nombre de usuario"
            name="username"
            formControl={forms.registerForm.control}
            error={forms.registerForm.formState.errors}
            placeholder="Ingrese su nombre"
          >
            <Ionicons name="person-outline" size={24} color={'#24292E'} />
          </AuthInput>
        </View>
      </View>
      <View className="justify-self-end">
        <AuthButton
          clickHandler={forms.registerForm.handleSubmit(
            submitHandlers.submitRegister
          )}
          title="REGISTRARSE"
          loader={loaders.loadRegister}
        />
      </View>
    </View>
  );
};
