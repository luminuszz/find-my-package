import React from 'react';

import { Container, Content, InputField, Input, PackageCount } from './styles';

import { PackageCard } from '../../components/PackageCard';

export const Home: React.FC = () => (
  <Container>
    <Content>
      <InputField>
        <Input placeholder="Anexar entrega" />
      </InputField>

      <PackageCount>10 entregas</PackageCount>

      <PackageCard />
    </Content>
  </Container>
);
