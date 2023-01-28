import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.GRAPHCM_API_KEY,
  cache: new InMemoryCache(),
});