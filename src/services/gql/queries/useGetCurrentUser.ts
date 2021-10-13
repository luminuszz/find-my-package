import { useQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';
import { client, gql } from '../index';

type Response = {
  me: {
    name: string;
    email: string;
  };
};

const GET_CURRENT_USER = gql`
  query {
    me {
      _id
      name
      email
      packages {
        _id
        name
        code
      }
    }
  }
`;

const getCurrentUserRequest = async () =>
  client.request<Response>(GET_CURRENT_USER);

const useGetCurrentUser = (options?: UseQueryOptions) =>
  useQuery<any, Response>(getCurrentUserRequest.name, getCurrentUserRequest, {
    ...options,
  });

export { useGetCurrentUser, Response, getCurrentUserRequest, GET_CURRENT_USER };
