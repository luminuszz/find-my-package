import { useMutation, UseMutationOptions } from 'react-query';
import { gql, client, GqlResponse } from '../index';

type CreatePackageRequest = {
  code: string;
};

const CREATE_PACKAGE_NUTATION = gql`
  mutation CreatePackage($code: String!) {
    createPackage(createPackage: { code: $code }) {
      name
      code
      departureData
      updatedAt
      createdAt
    }
  }
`;

const createPackageRequest = async ({ code }: CreatePackageRequest) =>
  client.request<any, CreatePackageRequest>(CREATE_PACKAGE_NUTATION, { code });

function useCreatePackage() {
  return useMutation<any, any, CreatePackageRequest>(createPackageRequest);
}

export {
  CREATE_PACKAGE_NUTATION,
  createPackageRequest,
  useCreatePackage,
  CreatePackageRequest,
};
