import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import orderSlice from './features/orderInfo/orderSlice';

export const store = configureStore({
  reducer: {
    order: orderSlice,
  },
});

export const server = 'http://192.168.1.8:8000/api/v1';
