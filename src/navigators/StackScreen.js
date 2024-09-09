import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen"
import TabScreen from "./TabScreen"
const Stack = createNativeStackNavigator()

export default function StackScreen(props) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="LoginSceen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
      </Stack.Navigator >
    </>
  )
};
