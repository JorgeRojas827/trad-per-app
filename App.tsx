import { SafeAreaView, Text } from 'react-native';
import { Login } from './modules/auth/Login';
import { fontHelper } from './common/helpers/fontHelper';

export default function App() {
  const { fontsLoaded } = fontHelper();

  if (!fontsLoaded) {
    return (
      <SafeAreaView>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="flex-1">
      <Login />
    </SafeAreaView>
  );
}
