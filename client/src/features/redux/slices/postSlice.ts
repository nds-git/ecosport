import { createSlice } from '@reduxjs/toolkit';
import type { PostType } from '../../../types';
import { addPostThunk, getAllPostsThunk } from '../../thunkActions';

export type InitialState = {
  data: PostType[];
};
const initialState: InitialState = {
  data: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPostsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(addPostThunk.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default postSlice.reducer;
