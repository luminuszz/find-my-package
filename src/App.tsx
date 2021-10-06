import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

import { theme } from './styles/theme';
import { fonts } from './styles/fonts';
import { Navbar } from './components/Navbar';
import { Home } from './screens/Home';

export default function App() {
  const [isFontsLoad] = useFonts({
    ...fonts,
  });

  if (!isFontsLoad) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Navbar pageTitle="Entregas" />
      <Home />
    </ThemeProvider>
  );
}
