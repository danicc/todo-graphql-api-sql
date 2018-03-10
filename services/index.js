import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://todo-graphql.firebaseio.com',
});

export default {
  auth: async (req) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { uid } = decodedToken;
        return uid;
        // return User.query().findOne('uid', decodedToken.uid);
      } catch (error) {
        return error;
      }
    }
  },
  signUp: async (newUser) => {
    try {
      const userRecord = await admin.auth().createUser(newUser);
      return userRecord;
    } catch (error) {
      return error;
    }
  },
};
