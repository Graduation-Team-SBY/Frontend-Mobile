import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Login from "../screens/Login";
import TabScreen from "./TabScreen";
import LandingPage from "../screens/LandingPage";
import ClientRegister from "../screens/clients/ClientRegister";
import WorkerRegister from "../screens/workers/WorkerRegister";
import CreateBebersih from "../screens/clients/CreateBebersih";
import CreateNitip from "../screens/clients/CreateNitip";
import WorkerOrderDetail from "../screens/workers/WorkerOrderDetail";
import WorkerVerificationOrder from "../screens/workers/VerificationOrder"
const Stack = createNativeStackNavigator();


export default function RegStackScreen() {

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Stack.Navigator>
            {/* <Stack.Screen name="Testing" component={Testing} /> */}
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ClientRegister" component={ClientRegister} options={{ headerShown: false }} />
            <Stack.Screen name="WorkerRegister" component={WorkerRegister} options={{ headerShown: false }} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider >
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9FE',
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
        <Stack.Screen name="CreateBebersih" component={CreateBebersih} options={{ title: "" }} />
        <Stack.Screen name="CreateNitip" component={CreateNitip} options={{ title: "" }} />
        <Stack.Screen name="WorkerOrderDetail" component={WorkerOrderDetail} options={({ route }) => ({ title: route.params.title })} />
        {/* <Stack.Screen name="" component={}></Stack.Screen> */}
        <Stack.Screen name="WorkerVerificationOrder" component={WorkerVerificationOrder} />
      </Stack.Navigator>
    </>
  )
}