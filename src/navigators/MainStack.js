import { NavigationContainer } from "@react-navigation/native";
import StackScreen, { AuthStackScreen } from "./StackScreen";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/auth";
import * as SecureStore from "expo-secure-store";
import TabScreen from "./TabScreen";

export default function MainStack(props) {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    SecureStore.getItemAsync("access_token")
      .then((token) => {
        if (token) {
          setIsSignedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <NavigationContainer>
        {isSignedIn ? <AuthStackScreen /> : <StackScreen />}
      </NavigationContainer>
    </>
  );
}
