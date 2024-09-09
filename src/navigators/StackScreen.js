import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabScreen from "./TabScreen";
import HomeClient from "../screens/HomeClient";
const Stack = createNativeStackNavigator();

export default function StackScreen(props) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeClient"
          component={HomeClient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginSceen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
