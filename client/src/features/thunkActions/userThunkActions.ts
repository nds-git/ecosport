/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserSingInType, UserSingUpType, UserType } from '../../types';
import { checkUser, logoutUser, signInUser, signUpUser } from '../../services';

export const userCheckThunk = createAsyncThunk<UserType>('user/check', async () =>
  checkUser()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const userSignUpThunk = createAsyncThunk<UserType, UserSingUpType>(
  'user/signup',
  async (data) =>
    signUpUser(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const userSignInThunk = createAsyncThunk<UserType, UserSingInType>(
  'user/signin',
  async (data) =>
    signInUser(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const userLogoutThunk = createAsyncThunk<UserType, UserSingInType>(
  'user/logout',
   () =>
    logoutUser()
      .then((res) => res)
      .catch((err) => err),
);

// export const subscriberThunk = createAsyncThunk<UserType, UserSingInType>(
//   'subscriber/signin',
//   async (data) =>
//     signInSubscriber(data)
//       .then((res) => res)
//       .catch((err) => Promise.reject(err)),
// );
