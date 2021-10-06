import React from 'react';

import {
  Container,
  Content,
  Info,
  PackageName,
  DepartureDate,
  Status,
  Footer,
  FooterDetails,
  Icon,
  Name,
} from './styles';

export const PackageCard: React.FC = () => (
  <Container>
    <Content>
      <Info>
        <PackageName>Pacote 1</PackageName>
        <DepartureDate> 01/12/2021</DepartureDate>
      </Info>

      <Status>Entregue</Status>
    </Content>

    <Footer>
      <FooterDetails>
        <Name>Detalhes</Name>
        <Icon>ir</Icon>
      </FooterDetails>
    </Footer>
  </Container>
);
