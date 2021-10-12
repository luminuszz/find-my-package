import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const theme = {
  colors: {
    blue500: '#4C33CC',
    yellow500: '#FFC042',
    yellow300: '#FFF1D6',
    green500: '#00DA6D',
    red500: '#E62E2E',
    gray200: '#DAD7E0',
    gray300: '#BEBCCC',
    gray400: '#6F6C80',
    gray500: '#4C4766',
    purple300: '#D5CCFF',
    purple200: '#F7F5FA',

    white: '#FFFFFF',
  },

  fonts: {
    inter: {
      regular: 'Inter_400Regular',
      bold: 'Inter_700Bold',
    },

    robotoCondensed: {
      regular: 'RobotoCondensed_400Regular',
      bold: 'RobotoCondensed_700Bold',
    },
  },

  utils: {
    RFPercentage: (value: number) => `${RFPercentage(value)}px`,
    RFValue: (value: number) => `${RFValue(value)}px`,
    getBottomSpace,
    getStatusBarHeight,
  },
};
