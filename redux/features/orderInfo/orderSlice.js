import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  serviceType: 'No ServiceType Selected',
  selectedBike: 'no Bike Selected',
  selectedDate: '00-00--0000',
  selectedTime: '00-00',
  baseCost: '00',
  vehicleProblem: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateSelectedBike: (state, action) => {
      state.selectedBike = action.payload;
    },
    updateSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    updateSelectedService: (state, action) => {
      state.serviceType = action.payload;
    },
    updateSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    updateTotalCost: (state, action) => {
      state.baseCost = action.payload;
    },
    updateVehicleProblem: (state, action) => {
      state.vehicleProblem = action.payload;
    },
  },
});
export const {
  updateSelectedBike,
  updateSelectedService,
  updateSelectedTime,
  updateSelectedDate,
  updateTotalCost,
  updateVehicleProblem,
} = orderSlice.actions;

export default orderSlice.reducer;
