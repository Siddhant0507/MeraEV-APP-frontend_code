import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BikeDetails from '../Components/DropDown/BikeDetails';
import VehicleProblem from '../Components/DropDown/VehicleProblem';
import { Divider } from 'react-native-paper';
import DatePicker from '../Components/DatePickerCalender/DatePicker';
import GeneralServicingTime from '../Components/DropDown/GeneralServicingTime';

import { useDispatch } from 'react-redux';
import {
  updateSelectedService,
  updateTotalCost,
} from '../../redux/features/orderInfo/orderSlice';
const VehicleRepairInfo = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    navigation.navigate('GeneralServicingBill');
    dispatch(updateSelectedService('Vehicle Repair'));
    dispatch(updateTotalCost('299'));
  };
  return (
    <ScrollView>
      <View className="p-3 flex-1">
        <View className="flex flex-row justify-between items-center py-3">
          <Text className="text-lg text-black font-bold">Service Type</Text>
          <Text className="text-lg text-black">Vehicle Repair</Text>
        </View>
        <Divider bold="true" />
        <Text className="text-lg font-bold text-black mt-3">
          Vehicle Problem
        </Text>
        <VehicleProblem />
        <Divider bold="true" />
        <Text className="text-lg text-black font-bold mt-3">
          Select the bike Model
        </Text>
        <BikeDetails />
        <Divider bold="true" />
        <Text className="text-lg text-black font-bold my-3">
          Appointment Date
        </Text>
        <DatePicker />
        <Text className="text-lg text-black font-bold my-3">
          Appointment Time
        </Text>
        <GeneralServicingTime />
        <TouchableOpacity
          onPress={handleClick}
          className=" h-[55px] w-full bg-[#79d273] rounded-md flex justify-center items-center mt-4">
          <Text className="text-lg text-white font-bold">Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default VehicleRepairInfo;

const styles = StyleSheet.create({});
