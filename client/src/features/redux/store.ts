import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import postSlice from './slices/postSlice';
import eventSlice from './slices/eventSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice,
    events: eventSlice,
  },
});

export default store;
