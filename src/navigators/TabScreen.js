import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Logout from "../screens/Logout";
import HomeClient from "../screens/clients/HomeClient";
import ClientProfile from "../screens/clients/ClientProfile";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ClientOrderHistories from "../screens/clients/ClientOrderHistories";
import HomeWorker from "../screens/workers/HomeWorker";
import WorkerProfile from "../screens/workers/WorkerProfile";
import WorkerJobHistories from "../screens/workers/WorkerJobHistories";

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {
  return (
    <>
      {/* <Tab.Navigator>
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
        /> */}
      <Tab.Navigator>
        <Tab.Screen
          name="HomeWorker"
          component={HomeWorker}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="home" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="home-outline" size={size} color="#1E204C" />
              ),
            tabBarShowLabel: false,
            headerTitle: "Home Yasa"
          }}
        />
        {/* <Tab.Screen
          name="Profile"
          component={ClientProfile}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="person" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="person-outline" size={size} color="#1E204C" />
              ),
            tabBarShowLabel: false,
          }}
        /> */}
        <Tab.Screen
          name="WorkerProfile"
          component={WorkerProfile}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="person" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="person-outline" size={size} color="#1E204C" />
              ),
            tabBarShowLabel: false,
            headerTitle: "Profile Yasa"
          }}
        />
        {/* <Tab.Screen
          name="ClientOrderHistories"
          component={ClientOrderHistories}
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
        /> */}
        <Tab.Screen
          name="WorkerJobHistories"
          component={WorkerJobHistories}
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
        <Tab.Screen name="Logout" component={Logout} />
      </Tab.Navigator>
    </>
  );
}
