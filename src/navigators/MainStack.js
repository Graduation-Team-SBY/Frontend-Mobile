import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './StackScreen';
import { useState } from 'react';
import TabScreen from './TabScreen';
export default function MainStack(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? <TabScreen /> : <StackScreen />}
      </NavigationContainer>
    </>
  );
}