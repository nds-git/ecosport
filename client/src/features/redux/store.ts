import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import postSlice from './slices/postSlice';
import eventSlice from './slices/eventSlice';
import eventCreateSlice from './slices/eventCreateSlice';
import sponsorSlice from './slices/sponsorSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice,
    events: eventSlice,
    eventCreate: eventCreateSlice,
    sponsor: sponsorSlice,
  },
});

export default store;
