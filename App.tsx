import { SafeAreaView, Text } from 'react-native';
import { Login, navigationRef } from './modules/auth/Login';
import { fontHelper } from './common/helpers/fontHelper';
import Splash from './modules/auth/Splash';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { getAuth, setupAxios } from './common/helpers/authHelper';
import { apiUrl } from './common/utils/axios';
import ToastManager from 'toastify-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/home/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const queryClient = new QueryClient();
setupAxios(apiUrl);
const Stack = createNativeStackNavigator();

export default function App() {
  const [splash, setSplash] = useState(true);
  const { fontsLoaded } = fontHelper();

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView className="flex-1">
          <ToastManager />
          {splash ? (
            <Splash />
          ) : (
            <NavigationContainer ref={navigationRef} independent={true}>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </SafeAreaView>
      </QueryClientProvider>
    </Provider>
  );
}
