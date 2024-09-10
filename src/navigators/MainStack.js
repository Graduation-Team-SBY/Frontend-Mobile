import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./StackScreen";

export default function MainStack(props) {

  return (
    <>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </>
  );
}
