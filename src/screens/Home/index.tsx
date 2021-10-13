import React, { useEffect, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
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
import { useGetCurrentUserPackages } from '../../services/gql/queries/userGetuserPackages';
import { useCreatePackage } from '../../services/gql/mutations/useCreatePackage';
import FindIcon from '../../assets/find.svg';
import { Navbar } from '../../components/Navbar';

export type Package = {
  code: string;
  id: string;
  name: string;
  departureData: string;
  eventDate: string;
  eventHour: string;
  status: string;
};

export const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const { data: packages, isLoading } = useGetCurrentUserPackages();
  const createPackage = useCreatePackage();

  if (isLoading) {
    return null;
  }

  const handleSubmit = async () => {
    if (!createPackage.isLoading) return;

    await createPackage.mutateAsync({
      code: input,
    });

    const client = useQueryClient();

    await client.invalidateQueries('getCurrentUserPackagesRequest');
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
            {packages
              ? `${(packages as any).length} pacote(s)`
              : 'Não há pacotes'}
          </PackageCount>

          <PackageList
            keyExtractor={(item) => item.id || item.code}
            data={packages as Package[]}
            renderItem={({ item }) => <PackageCard packageData={item} />}
          />
        </Content>
      </Container>
    </>
  );
};
