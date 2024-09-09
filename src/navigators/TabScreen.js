import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator()
export default function TabScreen(props) {
  return (
    <>
      <Tab.Navigator> <Tab.Screen name="HomeScreen" component={HomeScreen}></Tab.Screen></Tab.Navigator >
    </>
  )
};
