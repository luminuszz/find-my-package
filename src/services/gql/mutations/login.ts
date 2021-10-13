import { useMutation, UseMutationOptions } from 'react-query';
import { gql, client, GqlResponse } from '../index';

type LoginResponse = {
  login: {
    token: string;
  };
};

type LoginRequest = {
  email: string;
  password: string;
};

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(createSession: { email: $email, password: $password }) {
      token
    }
  }
`;

const loginRequest = async (data: LoginRequest) =>
  client.request<LoginResponse, LoginRequest>(LOGIN_MUTATION, {
    email: data.email,
    password: data.password,
  });

const useLogin = () =>
  useMutation<LoginResponse, any, LoginRequest>(loginRequest);

export { useLogin, LoginResponse, LoginRequest, LOGIN_MUTATION, loginRequest };
