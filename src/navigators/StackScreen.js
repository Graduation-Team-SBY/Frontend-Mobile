import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../screens/LoginScreen";
import TabScreen from "./TabScreen";
import { StyleSheet } from "react-native";
import LandingPage from "../screens/LandingPage";
import ClientRegisterScreen from "../screens/ClientRegisterScreen";
import WorkerRegisterScreen from "../screens/WorkerRegisterScreen";

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Stack.Navigator>
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ClientRegister" component={ClientRegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WorkerRegister" component={WorkerRegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="TabScreen"
              component={TabScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider >
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
