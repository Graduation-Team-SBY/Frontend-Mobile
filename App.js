import MainStack from './src/navigators/MainStack';
import AuthProvider from "./src/contexts/auth"

export default function App() {
  return (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  );
}
