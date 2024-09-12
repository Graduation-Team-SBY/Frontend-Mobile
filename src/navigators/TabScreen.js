import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeWorker from "../screens/workers/HomeWorker";
import WorkerProfile from "../screens/workers/WorkerProfile";
import AllJobs from "../screens/workers/AllJobs";
import AllCurrentJobs from "../screens/workers/AllCurrentJobs";
import ProfileStack from "./ProfileStack";

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
          name="AllJobs"
          component={AllJobs}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return focused ? (
                <Ionicons name="briefcase" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="briefcase-outline" size={size} color="#1E204C" />
              )
            },
            tabBarShowLabel: false,
            headerTitle: "Pekerjaan"
          }}
        />
        <Tab.Screen
          name="AllCurrentJobs"
          component={AllCurrentJobs}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return focused ? (
                <Ionicons name="briefcase" size={size} color="#1E204C" />
              ) : (
                <Ionicons name="briefcase-outline" size={size} color="#1E204C" />
              )
            },
            tabBarShowLabel: false,
            headerTitle: "Pekerjaan Saya"
          }}
        />
        <Tab.Screen
          name="WorkerProfile"
          component={ProfileStack}
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
        {/* <Tab.Screen name="Logout" component={Logout} /> */}
      </Tab.Navigator>
    </>
  );
}
