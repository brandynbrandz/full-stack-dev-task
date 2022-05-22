import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    // uri: 'http://localhost:4000/graphql',
    uri: 'https://f7i9mt.sse.codesandbox.io/graphql',
    cache: new InMemoryCache
})

export default client