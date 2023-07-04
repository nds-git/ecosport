import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { EventCoordType } from '../../../types';

const initialState: EventCoordType = {
  geo: [],
  address: '',
};

const eventCreateSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setCoord: (state, action: PayloadAction<EventCoordType>) => action.payload,
  },
});

export default eventCreateSlice.reducer;
export const { setCoord } = eventCreateSlice.actions;
