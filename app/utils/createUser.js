import app from '../config/app';

export default ({ user, email }) => {
  app
    .database()
    .ref(`users/${user.uid}`)
    .set({
      email,
      createdAt: Date.now(),
    });
};
