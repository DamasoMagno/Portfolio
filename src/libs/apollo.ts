import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cldfj2uti017n01uo5p5phwrh/master",
  cache: new InMemoryCache()
});