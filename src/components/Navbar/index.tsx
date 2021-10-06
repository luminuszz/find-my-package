import React from 'react';

import LocaleIcon from '../../assets/locale.svg';
import LogoutIcon from '../../assets/logout.svg';
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
  LocaleDetails,
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

        <LogoutMessage>
          <LogoutIcon />
        </LogoutMessage>
      </UserDetails>

      <PageContent>
        <Title>{pageTitle}</Title>
        <LocaleDetails>
          <LocaleIcon />
          <Locale>Salvador, BA</Locale>
        </LocaleDetails>
      </PageContent>
    </Content>
  </Container>
);
