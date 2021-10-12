import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue500};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const BackgroundImageContent = styled.View`
  position: absolute;
  margin-left: -80px;
  height: 186px;
  z-index: -1;
`;

export const LogoContainer = styled.View`
  margin-top: 57px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.View`
  margin-top: 90px;
`;

export const TitleContent = styled.View``;

export const FirstWord = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.colors.yellow500};
  font-size: ${({ theme }) => theme.utils.RFValue(40)};
`;

export const SecondMessage = styled.Text`
  margin-top: -15px;
  font-weight: 700;
  font-style: italic;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.utils.RFValue(40)};
`;

export const SubTitle = styled.Text`
  margin-top: 16px;
  width: 70%;
  color: ${({ theme }) => theme.colors.purple300};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
  line-height: 25px;
`;

interface FormContentStyleProps {
  keyboardIsOpen: boolean;
}

export const FormContent = styled.View<FormContentStyleProps>`
  margin-top: ${(props) => (props.keyboardIsOpen ? 32 : 64)}px;
`;

export const ActionsForm = styled.View`
  margin: 24px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPassword = styled.Text`
  color: ${({ theme }) => theme.colors.purple400};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.utils.RFValue(13)};
`;
