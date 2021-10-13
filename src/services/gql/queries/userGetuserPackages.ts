import { useQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';
import { gql, client } from '..';

type Package = {
  code: string;
  _id: string;
  name: string;
  departureData: string;
  eventDate: string;
  eventHour: string;
  status: string;
};

type Response = {
  getAllPackages: Package[];
};

const GET_USER_PACKAGES_QUERY = gql`
  query {
    getAllPackages {
      code
      _id
      name
      departureData
      eventDate
      eventHour
      status
    }
  }
`;

const getCurrentUserPackagesRequest = async (): Promise<Package[]> => {
  const { getAllPackages: packages } = await client.request<Response>(
    GET_USER_PACKAGES_QUERY,
  );

  return packages.map((item) => ({
    ...item,
    eventDate: `${item.eventDate} ${item.eventHour}`,
  }));
};

function useGetCurrentUserPackages(options?: UseQueryOptions) {
  return useQuery(
    getCurrentUserPackagesRequest.name,
    getCurrentUserPackagesRequest,
    { ...options },
  );
}

export {
  getCurrentUserPackagesRequest,
  useGetCurrentUserPackages,
  GET_USER_PACKAGES_QUERY,
};
