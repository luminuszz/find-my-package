import React from 'react';

import {
  Container,
  Content,
  UserName,
  UserInfo,
  UserDetails,
  Message,
  LogoutMessage,
  PageContent,
  Title,
  Locale,
} from './styles';

interface Props {
  pageTitle: string;
}

export const Navbar: React.FC<Props> = ({ pageTitle }) => (
  <Container>
    <Content>
      <UserDetails>
        <UserInfo>
          <Message>Bem vindo,</Message>
          <UserName>Davi Ribeiro</UserName>
        </UserInfo>

        <LogoutMessage>Sair</LogoutMessage>
      </UserDetails>

      <PageContent>
        <Title>{pageTitle}</Title>
        <Locale>Salvador, BA</Locale>
      </PageContent>
    </Content>
  </Container>
);
