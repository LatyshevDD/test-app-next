import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.escuelajs.co/api/v1/auth/login',
  cache: new InMemoryCache(),
});