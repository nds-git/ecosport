import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType } from '../../../types';
import {
  userCheckThunk,
  userSignInThunk,
  userSignUpThunk,
} from '../../thunkActions/userThunkActions';

const initialState: UserStateType = {
  status: 'pending',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserStateType,
  reducers: {
    removeUser: (state) => ({ status: 'guest' }),
  },
  extraReducers: (builder) => {
    builder.addCase(userCheckThunk.fulfilled, (state, action) => ({
      status: 'success',
      data: action.payload,
    }));
    builder.addCase(userCheckThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(userSignUpThunk.fulfilled, (state, action) => ({
      status: 'success',
      data: action.payload,
    }));

    builder.addCase(userSignInThunk.fulfilled, (state, action) => ({
      status: 'success',
      data: action.payload,
    }));
  },
});

export default userSlice.reducer;
export const { removeUser } = userSlice.actions;
