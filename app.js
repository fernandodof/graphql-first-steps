const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const express = require('express');

const port = 3000;;
const app = express();

// Build a schema using GraphQL schema language from the schema file 
const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf-8' }));

// Resolvers functions. These functions are basically what our api will call to retrieve data
const resolvers = require('./resolvers');

// Create an apollo server instance based on the type definitions and the resolvers 
const apolloServer = new ApolloServer({ typeDefs, resolvers });
// Attach apollo server to the express app. Path is the endpoint of the GraphQL AP 
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => console.info(`Server started on port ${port}`));