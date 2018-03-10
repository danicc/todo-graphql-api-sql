import { merge } from 'lodash';
import todoResolver from './todo';
import userResolvers from './user';

const resolvers = merge(todoResolver, userResolvers);

export default resolvers;
