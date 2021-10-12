import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { DefaultTheme } from 'styled-components';

interface StyleIsCheckBoxProps {
  isChecked: boolean;
}

const switchCheckboxColor = (isChecked: boolean, theme: DefaultTheme) =>
  isChecked ? theme.colors.yellow500 : theme.colors.purple200;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckIndicatorWrapper = styled(RectButton)<StyleIsCheckBoxProps>`
  width: 20px;
  height: 20px;

  border-radius: 4px;
  background-color: ${({ theme, isChecked }) =>
    switchCheckboxColor(isChecked, theme)};

  justify-content: center;
  align-items: center;
`;

export const CheckIndicator = styled.View`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.RFValue(2)};
`;

export const Label = styled.Text<StyleIsCheckBoxProps>`
  margin-left: 12px;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme, isChecked }) => switchCheckboxColor(isChecked, theme)};
  font-size: ${({ theme }) => theme.utils.RFValue(13)};
`;
