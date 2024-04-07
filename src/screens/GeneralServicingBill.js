import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';

const GeneralServicingBill = ({navigation}) => {
  const {selectedBike, selectedTime, serviceType, selectedDate, baseCost} =
    useSelector(state => state.order);
  const calculateGST = (parseInt(baseCost) * 18) / 100;
  const totalCost = parseInt(parseInt(baseCost) + calculateGST + calculateGST);
  return (
    <>
      <View className="p-3 flex-1">
        <Text className="text-2xl font-bold text-black text-center my-3">
          ORDER DETAILS
        </Text>
        <View className="flex flex-row justify-between items-center my-4 ">
          <View className="flex gap-3">
            <Text className="font-bold text-lg text-black">
              Selected Service
            </Text>
            <Text className="font-bold text-lg text-black">Selected Bike</Text>
            <Text className="font-bold text-lg text-black">Selected Date</Text>
            <Text className="font-bold text-lg text-black">Selected TIme</Text>
          </View>
          <View className="flex gap-3">
            <Text className=" text-lg text-black text-right">
              {serviceType}
            </Text>
            <Text className=" text-lg text-black text-right">
              {selectedBike}
            </Text>
            <Text className=" text-lg text-black text-right">
              {selectedDate}
            </Text>
            <Text className=" text-lg text-black text-right">
              {selectedTime}
            </Text>
          </View>
        </View>
        <Divider bold={true} />
        {/* cost of indudial items */}
        <View className="flex flex-row justify-between items-center my-4 ">
          <View className="flex gap-3">
            <Text className=" text-xl text-black">Base Cost</Text>
            <Text className=" text-xl text-black">CGST</Text>
            <Text className=" text-xl text-black">SGST</Text>
          </View>
          <View className="flex gap-3">
            <Text className=" text-xl text-black text-right">
              {baseCost} INR
            </Text>
            <Text className=" text-xl text-black text-right">
              {calculateGST} (18%)
            </Text>
            <Text className=" text-xl text-black text-right">
              {calculateGST} (18%)
            </Text>
          </View>
        </View>
        <Divider bold={true} />
        {/* total cost */}
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="font-bold text-xl text-black">Total Cost</Text>
          <Text className="font-bold text-xl text-black"> {totalCost} INR</Text>
        </View>
        {/* worning message  */}
        <Text className="text-base">
          "Please note that if the vehicle has additional issues, the cost may
          increase accordingly. Final pricing will be determined after a
          thorough inspection."
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('BookingConfirm')}
          className="h-[55px] w-full  bg-[#79d273] flex justify-center items-center mt-5 rounded-md">
          <Text className="text-lg text-white font-semibold ">
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GeneralServicingBill;

const styles = StyleSheet.create({});
