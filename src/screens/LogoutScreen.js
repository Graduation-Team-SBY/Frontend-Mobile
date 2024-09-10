import * as SecureStore from "expo-secure-store"
import { AuthContext } from '../contexts/auth';
import { useContext } from "react"
import { View, Button } from "react-native";
export default function LogoutScreen() {
  const { setIsSignedIn } = useContext(AuthContext)
  const logoutHandler = async () => {
    try {
      await Promise.all([SecureStore.deleteItemAsync("role"), SecureStore.deleteItemAsync("access_token")])
      setIsSignedIn(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};
