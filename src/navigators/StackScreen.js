import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/auth";
import * as SecureStore from "expo-secure-store";
import LoginScreen from "../screens/LoginScreen";
import TabScreen from "./TabScreen";
import LandingPage from "../screens/LandingPage";
import ClientRegisterScreen from "../screens/ClientRegisterScreen";
import WorkerRegisterScreen from "../screens/WorkerRegisterScreen";
import CreateBebersihScreen from "../screens/CreateBebersihScreen";
import CreateNitipScreen from "../screens/CreateNitipScreen";
const Stack = createNativeStackNavigator();


export default function StackScreen() {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    SecureStore.getItemAsync("access_token")
      .then((token) => {
        if (token) {
          setIsSignedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Stack.Navigator>
            {isSignedIn ? (
              <>
                <Stack.Screen
                  name="TabScreen"
                  component={TabScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="CreateBebersih" component={CreateBebersihScreen} options={{ title: "" }} />
                <Stack.Screen name="CreateNitip" component={CreateNitipScreen} options={{ title: "" }} />

              </>
            ) : (
              <>
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
              </>
            )
            }

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
