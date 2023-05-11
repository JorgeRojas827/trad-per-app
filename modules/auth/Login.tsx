import { Image, SafeAreaView, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

const Tab = createMaterialTopTabNavigator();

export const Login = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <View
          style={{ elevation: 5, shadowColor: 'rgba(0, 0, 0, 0.20)' }}
          className="flex justify-center items-center relative h-4/6"
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
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#24292E',
            tabBarInactiveTintColor: '#24292E',
            tabBarLabelStyle: {
              fontFamily: 'Montserrat-Bold',
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#FF5757',
            },
            tabBarStyle: {
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              display: 'flex',
              overflow: 'hidden',
            },
          }}
        >
          <Tab.Screen
            name="Iniciar sesión"
            component={LoginForm}
          />
          <Tab.Screen
            name="Registro"
            component={RegisterForm}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
