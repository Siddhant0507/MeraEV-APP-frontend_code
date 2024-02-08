import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:"User1" ,
    email:'user@gmail.com',
    phoneNumber:'+911234567890',
    isLoggedIn: false,
  }

export const counterSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
      updateName: (state, action) => {
        const { Name,Email,PhoneNumber  } = action.payload;
       state.name=action.payload.Name
       state.phoneNumber=action.payload.PhoneNumber
       state.email=action.payload.Email
      },
      login: (state) => {
        state.isLoggedIn = true;
      },
      logout: (state) => {
        state.isLoggedIn = false;
      },
    },
  })
  
export const { updateName, login , logout } = counterSlice.actions

export default counterSlice.reducer