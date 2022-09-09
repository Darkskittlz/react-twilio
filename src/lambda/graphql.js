// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');


const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world!";
    }
  }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground()
    ],
});

exports.handler = server.createHandler();

