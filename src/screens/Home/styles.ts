import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.purple200};
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.View`
  height: 56px;
  width: ${Dimensions.get('window').width - 40}px;
  border-radius: 4px;
  margin-top: -28px;
  background-color: ${({ theme }) => theme.colors.white};

  justify-content: center;
  align-items: flex-start;

  padding: 19px 24px;
`;

export const Input = styled.TextInput`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray400}; ;
`;

export const PackageCount = styled.Text`
  margin-top: 16px;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
`;
