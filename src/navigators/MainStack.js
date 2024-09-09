import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./StackScreen";
import { useState, useContext, useEffect } from "react";
import TabScreen from "./TabScreen";
import { AuthContext } from "../contexts/auth";
import * as SecureStore from "expo-secure-store";
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
        {isSignedIn ? <TabScreen /> : <StackScreen />}
      </NavigationContainer>
    </>
  );
}
