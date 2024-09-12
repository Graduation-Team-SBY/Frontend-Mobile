import { createStackNavigator } from '@react-navigation/stack';
import WorkerProfile from '../screens/workers/WorkerProfile';
import UpdateProfile from '../screens/workers/UpdateProfile';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={WorkerProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={UpdateProfile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
