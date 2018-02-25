import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
app.use('/graphql', graphqlExpress({ schema }));


app.listen(PORT, () => {
  console.log(`GraphiQL is now running on http://localhost:${PORT}/graphiql`);
});
