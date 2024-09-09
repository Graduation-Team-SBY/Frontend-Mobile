import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackScreen from './StackScreen';
export default function MainStack(props) {

  return (<>
    <SafeAreaProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  </>)
};
