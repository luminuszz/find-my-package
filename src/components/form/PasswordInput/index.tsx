import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { SvgProps } from 'react-native-svg';

import Eye from '../../../assets/Eye.svg';
import CloseEye from '../../../assets/Eye-2.svg';
import {
  Container,
  Content,
  Divider,
  InputText,
  InputField,
  PasswordIndicatorButton,
} from './styles';

interface Props extends TextInputProps {
  icon: React.FC<SvgProps>;
}

export const PasswordInput: React.FC<Props> = ({ icon: Icon, ...props }) => {
  const [isMaskPassword, setIsMaskPassword] = useState(false);

  const onPressPasswordIndicator = () => setIsMaskPassword((old) => !old);
  return (
    <Container>
      <Content>
        <InputField>
          <Icon />
          <Divider />
          <InputText secureTextEntry={isMaskPassword} {...(props as any)} />
        </InputField>
        <PasswordIndicatorButton onPress={onPressPasswordIndicator}>
          {isMaskPassword ? <CloseEye /> : <Eye />}
        </PasswordIndicatorButton>
      </Content>
    </Container>
  );
};
