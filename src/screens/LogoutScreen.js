import * as SecureStore from "expo-secure-store"
import { AuthContext } from '../contexts/auth';
import { useContext } from "react"

export default function LogoutScreen() {
  const { setIsSignedIn } = useContext(AuthContext)
  const logoutHandler = async () => {
    await Promise.all([SecureStore.deleteItemAsync("role"), SecureStore.deleteItemAsync("access_token")])()
    setIsSignedIn(false)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};
