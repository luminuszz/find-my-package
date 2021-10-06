import React from 'react';

import PackageIcon from '../../assets/Package.svg';
import { Package } from '../../services/database/package.repository';

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
  PackAgeDetails,
} from './styles';

interface Props {
  packageData: Package;
}

export const PackageCard: React.FC<Props> = ({ packageData }) => (
  <Container>
    <Content>
      <Info>
        <PackAgeDetails>
          <PackageIcon width={24} height={24} />
          <PackageName>{packageData.code}</PackageName>
        </PackAgeDetails>
        <DepartureDate> {packageData.departureData}</DepartureDate>
      </Info>

      <Status>{packageData.status}</Status>
    </Content>

    <Footer>
      <FooterDetails>
        <Name>Detalhes</Name>
        <Icon>ir</Icon>
      </FooterDetails>
    </Footer>
  </Container>
);
