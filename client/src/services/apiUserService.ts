import type { UserSingInType, UserSingUpType, UserType } from '../types';
import apiInstanse from './apiConfig';

export const checkUser = (): Promise<UserType> =>
  apiInstanse
    .get<UserType>('/api/auth/check')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const signUpUser = (data: UserSingUpType): Promise<UserType> =>
  apiInstanse
    .post<UserType>('/api/auth/signup', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const signInUser = (data: UserSingInType): Promise<UserType> =>
  apiInstanse
    .post<UserType>('/api/auth/signin', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
