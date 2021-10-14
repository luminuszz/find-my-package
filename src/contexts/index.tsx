import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from '../hooks/useAuth';
import { theme } from '../styles/theme';
import { reactQueryClient } from '../services/reactQuery';

export const AppProvider: React.FC<{ expoToken: any }> = ({
  children,
  expoToken,
}) => (
  <QueryClientProvider client={reactQueryClient}>
    <AuthProvider expoToken={expoToken}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);
