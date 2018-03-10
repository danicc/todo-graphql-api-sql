import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import services from './services';

const PORT = process.env.PORT || 3000;

const app = express();

const buildOptions = async (req) => {
  const user = await services.auth(req);
  return {
    context: user && !user.errorInfo ? { user } : {},
    schema,
    formatError: error => ({
      name: error.name,
      message: error.message,
    }),
  };
};

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);
app.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions));

app.listen(PORT, () => {
  console.log(`GraphiQL is now running on http://localhost:${PORT}/graphiql`);
});
