import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

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
