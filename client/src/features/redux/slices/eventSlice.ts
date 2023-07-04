import { createSlice } from '@reduxjs/toolkit';
import type { EventType, RowsType } from '../../../types';
import {
  addEventThunk,
  deleteEventThunk,
  getAllEventThunk,
  getOneEventThunk,
  updateEventThunk,
  getAllEventToMainPageThunk,
  archiveEventThunk,
  getAllArchiveEventThunk,
  getAllEventWithPaginateThunk,
} from '../../thunkActions/eventThunkActions';

export type InitialState = {
  data: EventType[];
  event: EventType;
  rows: RowsType | null;
};

const initialState: InitialState = {
  data: [],
  event: {} as EventType,
  rows: {
    count: 0,
    rows: [],
  },
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    // subscriberCount: (state, action) => {
    //   console.log(action);
      
    //   state.data = state.data.map((el) => ({...el, subscribe: el.id === action.payload.id ? el.subscribe + 1 : el.subscribe  }))
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllEventToMainPageThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getAllEventThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getAllEventWithPaginateThunk.fulfilled, (state, action) => {
      state.rows = action.payload;
    });
    builder.addCase(addEventThunk.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(deleteEventThunk.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
    builder.addCase(updateEventThunk.fulfilled, (state, action) => {
      state.data = state.data.map((el) => (el.id === action.payload.id ? action.payload : el));
    });
    builder.addCase(getOneEventThunk.fulfilled, (state, action) => {
      state.event = action.payload;
    });
    builder.addCase(archiveEventThunk.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
    builder.addCase(getAllArchiveEventThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default eventSlice.reducer;
// export const {subscriberCount } = eventSlice.actions
