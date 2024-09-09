import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen"
import TabScreen from "./TabScreen"
import LandingPage from "../screens/LandingPage"
const Stack = createNativeStackNavigator()

export default function StackScreen(props) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
      </Stack.Navigator >
    </>
  )
};
