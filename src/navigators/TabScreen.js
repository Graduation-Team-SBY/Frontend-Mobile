import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoutScreen from '../screens/LogoutScreen';
import HomeClient from '../screens/HomeClient';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeClient} />
        <Tab.Screen name='Profile' component={ProfileScreen}/>
        <Tab.Screen name="Logout" component={LogoutScreen} />
      </Tab.Navigator>
    </>
  );
}
