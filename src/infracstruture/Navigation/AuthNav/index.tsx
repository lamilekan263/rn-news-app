import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../../../features/Authentication/screens/GetStarted';
import Login from '../../../features/Authentication/screens/Login';
import Register from '../../../features/Authentication/screens/Register';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
