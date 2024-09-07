import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

let apolloClient;

export const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:8000/graphql',
    fetch: typeof window === 'undefined' ? global.fetch : window.fetch,
  });

  const authLink = setContext((_, { headers }) => {
    // Example: Add token to headers if needed
    return {
      headers: {
        ...headers,
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('GraphQL Errors:', graphQLErrors);
    }
    if (networkError) {
      console.log('Network Errors:', networkError);
    }
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables SSR mode for client-side
    link: authLink.concat(errorLink).concat(httpLink),
    cache: new InMemoryCache(),
  });
};

// Initialize Apollo Client on first use
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If the Apollo Client has a state, restore it
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // For SSG/SSR, always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};
