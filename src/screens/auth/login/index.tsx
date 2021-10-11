import React from 'react';

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
} from './styles';

import BackGroundImage from '../../../assets/backgroundImgage.svg';
import Logotipo from '../../../assets/Logotipo.svg';
import Logo from '../../../assets/Logo.svg';

export const Login: React.FC = () => (
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
        <TitleContent>
          <FirstWord>Entregador,</FirstWord>
          <SecondMessage>você é nosso maior valor</SecondMessage>
        </TitleContent>

        <SubTitle>Faça seu login para começar suas entregas.</SubTitle>
      </MainContent>
    </Content>
  </Container>
);
