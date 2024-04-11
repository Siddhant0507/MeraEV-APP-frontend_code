import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchHistory = createAsyncThunk('fetchHistory', async () => {
  const response = await fetch('http://localhost:8000/api/v1/order/all-orders');
  console.log(response.data);
  const result = response.data;
  return result.json();
});

const initialState = {
  isLoading: true,
  serviceType: '',
  BikeName: '',
  servicingTime: '',
  servicingDate: '',
  cost: '',
  data: [],
  isError: null,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHistory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHistory.rejected, (state, action) => {
      console.log('error', action.payload);
      state.isError = true;
    });
  },
});

export default historySlice.reducer;
