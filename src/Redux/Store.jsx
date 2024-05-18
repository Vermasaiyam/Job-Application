import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User/UserReducer';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export default store;