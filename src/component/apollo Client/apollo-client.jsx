

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://closing-cheetah-58.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "BQuvXB9l2Ztm77Vshi35nexdiYjtJTsGAl4p99dK2ylPSlddoik6Kby6D4H2yE3S",
  },
  cache: new InMemoryCache(),
});

export default client;