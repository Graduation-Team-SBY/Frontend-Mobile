import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoutScreen from '../screens/LogoutScreen';
import HomeClient from '../screens/HomeClient';
import CreateJobScreen from '../screens/CreateJobScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
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
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="person" size={size} color='#1E204C' />
              ) : (
                <Ionicons name="person-outline" size={size} color='#1E204C' />
              ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen name="CreateJob" component={CreateJobScreen} />
        <Tab.Screen
          name="HistoryOrdersClient"
          component={HistoryOrdersClientScreen}
        />
        <Tab.Screen name="Logout" component={LogoutScreen} />
      </Tab.Navigator>
    </>
  );
}
