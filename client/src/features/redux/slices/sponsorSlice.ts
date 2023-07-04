import { createSlice } from '@reduxjs/toolkit';
import type { SponsorType } from '../../../types';
import { addSponsorThunk, getSponsorsExistEventThunk } from '../../thunkActions';

export type InitialState = {
  data: SponsorType[];
};

const initialState: InitialState = {
  data: [],
};

const sponsorSlice = createSlice({
  name: 'sponsor',
  initialState,
  reducers: {
    clearSponsorsState(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addSponsorThunk.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(getSponsorsExistEventThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sponsorSlice.reducer;
export const { clearSponsorsState } = sponsorSlice.actions;
