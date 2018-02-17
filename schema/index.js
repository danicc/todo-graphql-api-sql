import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Query {
        todos: [Todo]
        todos(id: Int!): Todo
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
