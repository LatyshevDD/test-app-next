import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: 'https://api.escuelajs.co/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
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

export const GET_USER = gql`
  query GetUser {
    myProfile {
      id
      name
      avatar
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }`

export function getUser() {
  return client.query({query: GET_USER});
}

// addUser({ variables: { name: "Denis",email: "denis@gmail.com", password: "1234", avatar: "https://cache3.youla.io/files/images/780_780/5b/ba/5bba4723b5fc2dc012011943.jpg" }})
//     .then((result) => console.log(result));

// const [addUser, { data, loading, error }] = useMutation(ADD_USER);