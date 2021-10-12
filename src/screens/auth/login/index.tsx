import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import {
  Container,
  BackgroundImageContent,
  LogoContainer,
  MainContent,
  TitleContent,
  FirstWord,
  SecondMessage,
  SubTitle,
  Content,
  FormContent,
} from './styles';

import BackGroundImage from '../../../assets/backgroundImgage.svg';
import Logotipo from '../../../assets/Logotipo.svg';
import Logo from '../../../assets/Logo.svg';
import UserICon from '../../../assets/cpf_icon.svg';
import LockIcon from '../../../assets/lockIcon.svg';

import { Input } from '../../../components/form/Input';
import { PasswordInput } from '../../../components/form/PasswordInput';

export const Login: React.FC = () => {
  const [isKeyboardOpen, setIsKeyBoardOpen] = useState(false);
  const [form, setForm] = useState({
    cpf: '',
    password: '',
  });

  const handleChange = (name: string, value: string) =>
    setForm((old) => ({ ...old, [name]: value }));

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setIsKeyBoardOpen(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeyBoardOpen(false));

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);
  return (
    <Container>
      <Content>
        <BackgroundImageContent>
          <BackGroundImage width={300} height={400} />
        </BackgroundImageContent>

        <LogoContainer>
          <Logotipo />
          <Logo />
        </LogoContainer>

        <MainContent>
          {!isKeyboardOpen && (
            <TitleContent>
              <FirstWord>Entregador,</FirstWord>
              <SecondMessage>você é nosso maior valor</SecondMessage>
            </TitleContent>
          )}
          <SubTitle>Faça seu login para começar suas entregas.</SubTitle>
        </MainContent>

        <FormContent keyboardIsOpen={isKeyboardOpen}>
          <Input
            value={form.cpf}
            onChangeText={(value) => handleChange('cpf', value)}
            icon={UserICon}
            placeholder="CPF"
            keyboardType="numeric"
          />

          <PasswordInput
            value={form.password}
            onChangeText={(value) => handleChange('password', value)}
            icon={LockIcon}
            placeholder="Senha"
            keyboardType="default"
          />
        </FormContent>
      </Content>
    </Container>
  );
};
