import React, { useState } from 'react';

import {
  Container,
  CheckIndicator,
  CheckIndicatorWrapper,
  Label,
} from './styles';

interface Props {
  value: boolean;
  onChangeValue: (value: boolean) => any;
}

export const Checkbox: React.FC<Props> = ({
  onChangeValue,
  value: isChecked,
}) => (
  <Container onTouchStart={() => onChangeValue(!isChecked)}>
    <CheckIndicatorWrapper isChecked={isChecked}>
      <CheckIndicator />
    </CheckIndicatorWrapper>

    <Label isChecked={isChecked}>Lembrar-me</Label>
  </Container>
);
