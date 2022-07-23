import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl4y1yig80y7p01taa29k54fl/master',
    cache: new InMemoryCache()
});