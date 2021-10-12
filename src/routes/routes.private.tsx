import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Home } from '../screens/Home';

export type RootStackParamList = {
  Home: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PrivateRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
