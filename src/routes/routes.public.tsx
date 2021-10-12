import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Login } from '../screens/auth/login';

export type PublicStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const PublicRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);
