import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.yellow500};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-weight: 500;
  font-size: ${({ theme }) => theme.utils.RFValue(16)};
`;
