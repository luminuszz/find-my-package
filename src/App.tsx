import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';

import { fonts } from './styles/fonts';
import { Navbar } from './components/Navbar';
import { AppProvider } from './contexts';
import { Routes } from './routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isFontsLoad] = useFonts({
    ...fonts,
  });

  if (!isFontsLoad) return <AppLoading />;

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
