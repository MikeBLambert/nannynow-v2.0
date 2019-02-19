import { post, get } from './request';
export const signUp = ({ email, password, role }) => {
  return post('/api/users/signup', { email, password, role }).then(result => {
    return { user: result };
  });
};

export const verifySession = () => {
  return get('/api/users/verify');
};
