import { ApolloClient, InMemoryCache, gql} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.escuelajs.co/graphql',
  cache: new InMemoryCache(),
})

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const ADD_USER = gql`
  mutation Register($name: String!, $email: String!, $password: String!, $avatar: String!) {
    addUser(data: {name: $name, email: $email, password: $password, avatar: $avatar}) {
      id
      name
      avatar
    }
  }`