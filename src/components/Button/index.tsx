import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface Props extends RectButtonProps {
  text?: string;
}

export const Button: React.FC<Props> = ({ text, children, ...props }) => (
  <Container {...props}>
    <ButtonText>{text || children}</ButtonText>
  </Container>
);
