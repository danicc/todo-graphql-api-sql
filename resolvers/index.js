import { merge } from 'lodash';
import todoResolver from './todo';

const resolvers = merge(todoResolver);

export default resolvers;

