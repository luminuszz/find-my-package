import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Package } from '.';

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

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 19px 24px;
`;

export const InputButton = styled(RectButton)`
  padding: 10px;
`;

export const Input = styled.TextInput`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray400}; ;s
`;

export const PackageCount = styled.Text`
  margin: 16px 0;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.utils.RFValue(15)};
`;

export const PackageList = styled(
  FlatList as new () => FlatList<Package>,
).attrs(({ theme }) => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: theme.utils.getBottomSpace(),
  },
}))`
  margin-bottom: 70px;
`;
