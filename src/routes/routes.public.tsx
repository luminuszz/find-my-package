import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Login } from '../screens/auth/login';

const Stack = createNativeStackNavigator();

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
