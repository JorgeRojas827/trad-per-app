import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  LogBox,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/redux-hooks';
import { deleteAuth } from './slices/AuthSlice';

const Tab = createMaterialTopTabNavigator();
LogBox.ignoreLogs(['Require cycle:']);

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export const Login = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(auth);
    dispatch(deleteAuth());
    if (auth && auth.token) {
      navigate('Home');
    }
  }, [navigationRef.isReady()]);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer independent={true}>
        <View
          style={{ elevation: 5, shadowColor: 'rgba(0, 0, 0, 0.20)' }}
          className="flex justify-center bg-white items-center relative h-5/12"
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
        <View className="h-7/12">
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
            <Tab.Screen name="Iniciar sesión" component={LoginForm} />
            <Tab.Screen name="Registro" component={RegisterForm} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
