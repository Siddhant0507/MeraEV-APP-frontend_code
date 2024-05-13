import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './features/orderInfo/orderSlice';
import historySlice from './features/userHistory/historySlice';
import authReducer from '../redux/features/auth/authSlice'
import userReducer from '../redux/features/user/userSlice';
export const store = configureStore({
  reducer: {
    order: orderSlice,
    history: historySlice,
    auth: authReducer,
    user: userReducer
  },
});

export const server = 'http://192.168.1.8:8000/api/v1';
