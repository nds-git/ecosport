import { createSlice } from '@reduxjs/toolkit';
import type { EventType } from '../../../types';
import {
  addEventThunk,
  deleteEventThunk,
  getAllEventThunk,
  getOneEventThunk,
  updateEventThunk,
} from '../../thunkActions/eventThunkActions';

export type InitialState = {
  data: EventType[];
  event: EventType;
};

const initialState: InitialState = {
  data: [],
  event: {} as EventType,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEventThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addEventThunk.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(deleteEventThunk.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
    builder.addCase(updateEventThunk.fulfilled, (state, action) => {
      state.data = state.data.map((el) => el.id === action.payload.id ? action.payload : el);
    });
    builder.addCase(getOneEventThunk.fulfilled, (state, action) => {
      state.event = action.payload
    })
  },
});

export default eventSlice.reducer;
