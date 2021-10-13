import { GraphQLClient, gql } from 'graphql-request';

type GqlResponse<T = any> = {
  data: T;
};

const endpoint = 'http://192.168.100.3:3000/graphql';

const client = new GraphQLClient(endpoint);

export { client, gql, GqlResponse };
