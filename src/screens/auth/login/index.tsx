import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackGroundImage from '../../../assets/backgroundImgage.svg';
import Logotipo from '../../../assets/Logotipo.svg';
import Logo from '../../../assets/Logo.svg';
import UserICon from '../../../assets/cpf_icon.svg';
import LockIcon from '../../../assets/lockIcon.svg';

import { Input } from '../../../components/form/Input';
import { PasswordInput } from '../../../components/form/PasswordInput';
import { Checkbox } from '../../../components/form/Checkbox';

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
  ActionsForm,
  ForgotPassword,
} from './styles';
import { Button } from '../../../components/Button';
import { useAuth } from '../../../hooks/useAuth';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigation = useNavigation<StackRoute.Public<'Login'>>();
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [isKeyboardOpen, setIsKeyBoardOpen] = useState(false);

  const handleChange = (name: keyof typeof form, value: any) =>
    setForm((old) => ({ ...old, [name]: value }));

  const handleSubmit = async () => login(form.email, form.password);

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
            value={form.email}
            onChangeText={(value) => handleChange('email', value)}
            icon={UserICon}
            placeholder="Email"
            keyboardType="email-address"
          />

          <PasswordInput
            value={form.password}
            onChangeText={(value) => handleChange('password', value)}
            icon={LockIcon}
            placeholder="Senha"
            keyboardType="default"
          />

          <ActionsForm>
            <Checkbox
              value={form.remember}
              onChangeValue={(value) => handleChange('remember', value)}
            />
            <ForgotPassword
              onPress={() => navigation.navigate('PasswordInput')}
            >
              Esqueci minha senha
            </ForgotPassword>
          </ActionsForm>

          <Button onPress={handleSubmit}>Entrar</Button>
        </FormContent>
      </Content>
    </Container>
  );
};
