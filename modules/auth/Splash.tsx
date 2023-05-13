import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <SafeAreaView className="h-full">
      <View
        style={{ elevation: 5, shadowColor: 'rgba(0, 0, 0, 0.20)' }}
        className="flex justify-center items-center relative h-full"
      >
        <View
          style={{ position: 'relative' }}
          className="flex flex-col self-center justify-self-center space-y-3 justify-center items-center"
        >
          <Image source={require('../../assets/img/comeloyaLogo.jpg')} />
          <Text className="font-montserrat-bold text-2xl">CÓMELO YA!</Text>
          <Text className="font-montserrat-regular px-14 text-sm text-center">
            Ordena tu menú , rápido y caliente, como si fuera de casa.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
