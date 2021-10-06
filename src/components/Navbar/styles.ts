import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 228px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.blue500};
`;

export const Content = styled.View`
  padding: 31px 24px 0;
`;

export const UserDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View``;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.purple300};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.purple300};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
`;

export const LogoutMessage = styled(RectButton)`
  padding: 5px;
`;

export const PageContent = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoCondensed.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.utils.RFValue(32)};
`;

export const LocaleDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Locale = styled.Text`
  margin-left: 13px;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.purple300};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
`;
