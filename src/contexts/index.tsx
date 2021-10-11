import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

import { NotificationsProvider } from '../hooks/useNotifications';
import { theme } from '../styles/theme';

export const AppProvider: React.FC = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </NotificationsProvider>
    </QueryClientProvider>
  );
};
