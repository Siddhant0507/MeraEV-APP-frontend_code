import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import GeneralServicingTime from '../Components/DropDown/GeneralServicingTime';
import BottomBtn from '../Components/BottomButton/BottomBtn';
import BikeDetails from '../Components/DropDown/BikeDetails';
import DatePicker from '../Components/DatePickerCalender/DatePicker';

import {useDispatch} from 'react-redux';
import {
  updateSelectedService,
  updateTotalCost,
} from '../../redux/features/orderInfo/orderSlice';

const GeneralServicingDateTime = ({navigation}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    navigation.navigate('GeneralServicingBill');
    dispatch(updateSelectedService('General Servicing'));
    dispatch(updateTotalCost('699'));
  };
  return (
    <>
      <View className="p-3 flex-1">
        <Text className="text-xl font-bold text-black">Select Bike - </Text>
        <BikeDetails />
        <Text className="text-xl font-bold text-black mb-1 mt-6">
          Select Servicing Date -
        </Text>
        <DatePicker />
        <Text className="text-xl font-bold text-black my-1 mt-6">
          Select Servicing Time -
        </Text>
        <GeneralServicingTime />
      </View>
      <TouchableOpacity onPress={handleClick}>
        <BottomBtn name={'Next'} />
      </TouchableOpacity>
    </>
  );
};

export default GeneralServicingDateTime;

const styles = StyleSheet.create({});
