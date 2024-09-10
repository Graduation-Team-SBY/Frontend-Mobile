import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import TabScreen from "./TabScreen";
import LandingPage from "../screens/LandingPage";
import ClientRegisterScreen from "../screens/ClientRegisterScreen";
import WorkerRegisterScreen from "../screens/WorkerRegisterScreen";
import CreateBebersihScreen from "../screens/CreateBebersihScreen";
import CreateNitipScreen from "../screens/CreateNitipScreen";
const Stack = createNativeStackNavigator();


export default function RegStackScreen() {

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

export function AuthStackScreen() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreateBebersih" component={CreateBebersihScreen} options={{ title: "" }} />
        <Stack.Screen name="CreateNitip" component={CreateNitipScreen} options={{ title: "" }} />
      </Stack.Navigator>
    </>
  )
}