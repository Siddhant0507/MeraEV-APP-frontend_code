import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authApi';
import { getUserDetails } from './userAPI';

const initialState = {
    loading: false,
    userDetails: {}
};

export const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        addUserDetails: (state, actions) => {
            state.userDetails = actions.payload
        }
    },
});

export const { addUserDetails } = userSlice.actions;

export const getUserDetailsThunk = () => async (dispatch) => {
    const data = await getUserDetails();
    dispatch(addUserDetails(data?.user))
    console.log("SLICE", data?.user);
    return data?.user
}

export default userSlice.reducer;
