import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';

import { theme } from './styles/theme';
import { fonts } from './styles/fonts';
import { Navbar } from './components/Navbar';
import { Home } from './screens/Home';
import { NotificationsProvider } from './hooks/useNotifications';

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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
          <Navbar pageTitle="Entregas" />
          <Home />
        </ThemeProvider>
      </NotificationsProvider>
    </QueryClientProvider>
  );
}
