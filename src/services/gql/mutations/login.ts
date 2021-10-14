import { useMutation } from 'react-query';
import { gql, client } from '../index';

type LoginResponse = {
  login: {
    token: string;
  };
};

type LoginRequest = {
  email: string;
  password: string;
  appToken: any;
};

const LOGIN_MUTATION = gql`
  mutation Login(
    $email: String!
    $password: String!
    $appToken: AppTokenInput!
  ) {
    login(
      createSession: { email: $email, password: $password, appToken: $appToken }
    ) {
      token
    }
  }
`;

const loginRequest = async (data: LoginRequest) =>
  client.request<LoginResponse, LoginRequest>(LOGIN_MUTATION, {
    email: data.email,
    password: data.password,
    appToken: data.appToken,
  });

const useLogin = () =>
  useMutation<LoginResponse, any, LoginRequest>(loginRequest);

export { useLogin, LoginResponse, LoginRequest, LOGIN_MUTATION, loginRequest };
