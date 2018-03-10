import services from '../services';

const userResolvers = {
  Mutation: {
    signUp: async (_, args) => {
      if (args.user) {
        try {
          const userRecord = await services.signUp(args.user);
          return userRecord;
        } catch (error) {
          return error;
        }
      }
      throw new Error('Bad Request');
    },
  },
};

export default userResolvers;
