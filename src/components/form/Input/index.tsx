import React from 'react';
import { TextInputProps } from 'react-native';

import { SvgProps } from 'react-native-svg';
import { Container, Content, Divider, InputText } from './styles';
import { theme } from '../../../styles/theme';

interface Props extends TextInputProps {
  icon: React.FC<SvgProps>;
}

export const Input: React.FC<Props> = ({ icon: Icon, ...props }) => {
  const isNotEmpty = !!props.value;

  const currentColor = isNotEmpty
    ? theme.colors.blue500
    : theme.colors.yellow500;

  console.log({ isNotEmpty, value: props.value });

  return (
    <Container>
      <Content>
        <Icon />
        <Divider />
        <InputText {...(props as any)} />
      </Content>
    </Container>
  );
};
