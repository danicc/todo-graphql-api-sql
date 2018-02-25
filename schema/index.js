import { makeExecutableSchema } from 'graphql-tools';
import Todo from './todo';
import resolvers from '../resolvers';

const rootQuery = `
    type Query {
        todos: [Todo]
        todo(id: Int!): Todo
    }
`;

const rootMutation = `
    type Mutation {
        createTodo(createTodoParams: CreateTodo): Todo
        updateTodo(id: Int!, updateTodoParams: UpdateTodo): Todo
        deleteTodo(id: Int!): Todo
    }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, rootMutation, Todo],
  resolvers,
});

export default schema;
