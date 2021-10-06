import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://correios.contrateumdev.com.br/api',
});

type TrackRequest = {
  type: string;
  code: string;
};

type PackageResponse = {
  objeto: {
    evento: {
      descricao: string;
      dataPostagem: string;
    }[];
  }[];
};

export const getPackageStatus = async (
  packageData: TrackRequest,
): Promise<PackageResponse> => {
  const response = await api.post('/rastreio', packageData);

  return response.data as unknown as PackageResponse;
};
