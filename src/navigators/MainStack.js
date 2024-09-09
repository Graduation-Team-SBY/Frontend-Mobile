import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StackScreen from './StackScreen';
import { StyleSheet } from 'react-native';
export default function MainStack(props) {

  return (<>
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  </>)
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  }
})