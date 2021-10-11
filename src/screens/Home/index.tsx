import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import {
  Container,
  Content,
  InputField,
  Input,
  PackageCount,
  PackageList,
  InputButton,
} from './styles';

import { PackageCard } from '../../components/PackageCard';

import FindIcon from '../../assets/find.svg';
import { getPackageStatus } from '../../services/api';
import {
  Package,
  packageRepository,
} from '../../services/database/package.repository';
import { useNotifications } from '../../hooks/useNotifications';
import { Navbar } from '../../components/Navbar';

export const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(false);
  const { schedulePushNotification } = useNotifications();

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    try {
      if (!input) return;

      setLoading(true);

      const response = await getPackageStatus({
        code: input,
        type: 'LS',
      });

      const data = response.objeto[0].evento[0];

      const newPackage = await packageRepository.savePackage({
        code: input,
        departureData: String(data.dataPostagem),
        name: 'LS',
        status: data.descricao,
      });

      setPackages((old) => [...old, newPackage]);

      setInput('');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar pageTitle="Entregas" />
      <Container>
        <Content>
          <InputField onTouchStart={() => inputRef.current?.focus()}>
            <Input
              ref={inputRef}
              placeholder="Anexar entrega"
              value={input}
              onChangeText={(value) => setInput(value)}
            />
            <InputButton onPress={handleSubmit}>
              <FindIcon />
            </InputButton>
          </InputField>

          <PackageCount>
            {packages.length
              ? `${packages.length} pacote (s)`
              : 'Não há pacotes'}
          </PackageCount>

          <PackageList
            keyExtractor={(item) => item.id}
            data={packages}
            renderItem={({ item }) => <PackageCard packageData={item} />}
          />
        </Content>
      </Container>
    </>
  );
};
