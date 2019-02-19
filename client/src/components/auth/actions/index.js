import { SIGN_IN, SIGN_UP, SESSION_TOKEN, SESSION_CREATE, LOAD_START, LOAD_END, SESSION_ERROR } from '../reducers';
import { signUp as signUpService, verifySession } from '../../../services/authApi';

export const signUp = ({ email, password, role }) => ({
  type: SIGN_UP,
  payload: signUpService({ email, password, role }),
});

export const signIn = ({ email, password }) => ({
  type: SIGN_IN,
  payload: { email, password },
});

// export const refreshSession = () => ({
//   type: SESSION_CREATE,
//   loadStart: LOAD_START,
//   loadEnd: LOAD_END,
//   errorType: SESSION_ERROR,
//   payload: verifySession()
// });

export const updateSessionToken = token => ({
  type: SESSION_TOKEN,
  payload: token
});
