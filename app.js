const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const express = require('express');

const port = 3000;;

const app = express();

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => console.info(`Server started on port ${port}`));