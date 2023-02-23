import API from '@/api';
import IAuth from '@/interface/authType';

export const signUp = async ({ email, password }: IAuth) => {
  return await API.post('/auth/signup', { email, password });
};

export const signIn = async ({ email, password }: IAuth) => {
  return await API.post('/auth/signin', { email, password });
};
