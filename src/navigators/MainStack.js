import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackScreen from './StackScreen';
import { Text } from 'react-native';
export default function MainStack(props) {

  return (<>
    <SafeAreaProvider>
      <NavigationContainer>
        <Text style={{
          flex: 1,
          textAlign: "center",
          textAlignVertical: "center",
          alignItems: "center",
          justifyContent: "center"
        }}>Hallo</Text>
        <StackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  </>)
};
