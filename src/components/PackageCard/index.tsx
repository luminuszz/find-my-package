import React from 'react';

import PackageIcon from '../../assets/Package.svg';

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
  StatusDate,
} from './styles';

type Package = {
  code: string;
  id: string;
  name: string;
  departureData: string;
  eventDate: string;
  eventHour: string;
  status: string;
};

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
      <StatusDate>{packageData.eventDate}</StatusDate>
    </Content>

    <Footer>
      <FooterDetails>
        <Name>Detalhes</Name>
        <Icon>ir</Icon>
      </FooterDetails>
    </Footer>
  </Container>
);
