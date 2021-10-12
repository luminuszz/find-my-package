import styled from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.purple200};
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const Content = styled.View`
  height: 100%;
  width: 90%;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputField = styled.View`
  flex-direction: row;
`;

export const Divider = styled.View`
  width: 1px;
  height: 24px;
  margin: 0 20px;

  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const InputText = styled.TextInput`
  margin-right: 10px;
  width: 80%;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const PasswordIndicatorButton = styled.TouchableWithoutFeedback`
  padding: 5px;
`;
