import { StyleSheet } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function UpdateProfileWorker({ navigation }) {

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}></SafeAreaView>
      </SafeAreaProvider>
    </>
  )
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FFF",
    flex: 1
  }
})