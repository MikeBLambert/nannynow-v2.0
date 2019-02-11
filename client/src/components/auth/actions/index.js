import { SIGN_IN } from '../reducers';

export const signIn = ({ email, password }) => ({
  type: SIGN_IN,
  payload: { email, password },
});
