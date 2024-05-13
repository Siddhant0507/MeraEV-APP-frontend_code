import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  loading: false,
  userData: {}

};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserData: (state, actions) => {
      state.userData = actions.payload
    }
  },
});

export const { addUserData } = authSlice.actions;

export const registerThunk = (name, phone_number, email_id) => async (dispatch) => {
  const data = await registerUser(name, phone_number, email_id);
  console.log(data);
  return data
}
export const loginThunk = (phone_number) => async (dispatch) => {
  const data = await loginUser(phone_number);
  return data
}

export default authSlice.reducer;
