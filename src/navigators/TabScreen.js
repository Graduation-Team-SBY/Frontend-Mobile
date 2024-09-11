import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogoutScreen from "../screens/LogoutScreen";
import HomeClient from "../screens/HomeClient";
import ProfileScreen from "../screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HistoryOrdersClientScreen from "../screens/HistoryOrdersClientScreen";

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeClient"
          component={HomeClient}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="home" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="home-outline" size={size} color="#1E204C" />
              ),
            tabBarShowLabel: false,
            headerTitle: "Home"
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="person" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="person-outline" size={size} color="#1E204C" />
              ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="HistoryOrdersClient"
          component={HistoryOrdersClientScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return focused ? (
                <MaterialIcons name="history" size={size} color="#1E204C" />
              ) : (
                <MaterialIcons name="history" size={size} color="#1E204C" />
              )
            },
            tabBarShowLabel: false,
            headerTitle: "Order Histories"
          }}
        />
        <Tab.Screen name="Logout" component={LogoutScreen} />
      </Tab.Navigator>
    </>
  );
}
