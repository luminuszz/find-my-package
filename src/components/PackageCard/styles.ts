import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width - 40}px;
  height: 184px;

  background-color: ${({ theme }) => theme.colors.white};

  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
`;

export const Content = styled.View`
  padding: 21px 26px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PackageName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoCondensed.bold};
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.utils.RFValue(22)};
`;

export const DepartureDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.utils.RFValue(10)};
`;

export const Status = styled.Text`
  margin-top: 32px;

  color: ${({ theme }) => theme.colors.green500};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
  text-align: center;
`;

export const Footer = styled.View`
  height: 55px;
  background-color: ${({ theme }) => theme.colors.yellow300};
  padding: 15px;
`;

export const FooterDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
`;

export const Icon = styled.Text`
  font-size: ${({ theme }) => theme.utils.RFValue(14)};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.gray500};
`;
