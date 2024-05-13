import { createSlice } from '@reduxjs/toolkit';
import { allOrder, createOrder, myOrder } from './orderAPI';

const initialState = {
  serviceType: 'No ServiceType Selected',
  selectedBike: 'no Bike Selected',
  selectedDate: '00-00--0000',
  selectedTime: '00-00',
  baseCost: '00',
  vehicleProblem: '',
  myOrders: {},
  allOrders: {}
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
    showMyOrder: (state, action) => {
      state.myOrders = action.payload;
    },
    showAllOrder: (state, action) => {
      state.allOrders = action.payload;
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
  showMyOrder,
  showAllOrder
} = orderSlice.actions;


export const createOrderThunk = (serviceType, bikename, dateOfService, cost) => async (dispatch) => {
  const data = await createOrder(serviceType, bikename, dateOfService, cost);
  // dispatch(addUserDetails(data?.user))
  return data
}
export const myOrderThunk = () => async (dispatch) => {
  const data = await myOrder();
  dispatch(showMyOrder(data))
  return data
}
export const allOrderThunk = () => async (dispatch) => {
  const data = await allOrder();
  dispatch(showAllOrder(data))
  return data
}

export default orderSlice.reducer;
