import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoutScreen from '../screens/LogoutScreen';
import HomeClient from '../screens/HomeClient';

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="HomeClientScreen" component={HomeClient} />
        <Tab.Screen name="Logout" component={LogoutScreen} />
      </Tab.Navigator>
    </>
  );
}
