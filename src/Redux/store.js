import { configureStore } from '@reduxjs/toolkit';
import UserDetailsSlice from './Features/UserDetails/UserDetailsSlice';

const store = configureStore({
  reducer: {
    userDetails: UserDetailsSlice,
  },
});

export default store;