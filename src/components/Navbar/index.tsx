import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

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
import { useAuth } from '../../hooks/useAuth';
import { getCurrentCityByLocation } from '../../services/location';

interface Props {
  pageTitle: string;
}

export const Navbar: React.FC<Props> = ({ pageTitle }) => {
  const { user, logout } = useAuth();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});

      setLocation(coords);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <UserDetails>
          <UserInfo>
            <Message>Bem vindo,</Message>
            <UserName>{user.name}</UserName>
          </UserInfo>

          <LogoutMessage onPress={logout}>
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
};
