import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';

const GeneralServicingBill = () => {
  return (
    <SafeAreaView className=" p-5">
      <Text className="font-bold text-xl text-black py-3">
        Time of Appointment
      </Text>
      <View className="flex flex-row items-center justify-around">
        <Text className="text-base text-black">Selected Date</Text>
        <Text className="text-base text-black"> D/M/Y</Text>
      </View>
      <View className="flex flex-row items-center justify-around">
        <Text className="text-base text-black">Selected Time</Text>
        <Text className="text-base text-black">Hr/Min/Sec</Text>
      </View>
      <Text className="font-bold text-xl text-black py-3">Service Type</Text>
      <View className="flex flex-row items-center justify-around">
        <Text className="text-base text-black">General Servicing</Text>
        <Text className="text-base text-black">View Details</Text>
      </View>
      <Divider className="text-green-700 bg-[#79d273] my-1" bold="true" />
      <View className="flex flex-row items-center justify-around">
        <Text className="text-base text-black">Servicing Charge</Text>
        <Text className="text-base text-black">₹ 699</Text>
      </View>
      <View className="flex flex-row items-center justify-around pt-1">
        <Text className="text-base text-black">Inspection Charge</Text>
        <Text className="text-base text-black">₹ 99</Text>
      </View>
      <Divider className="text-green-700 bg-[#79d273] my-1" bold="true" />
      <View className="flex flex-row items-center justify-around ">
        <Text className="font-bold text-xl text-black">Total Charge</Text>
        <Text className="font-bold text-xl text-black">₹ 798</Text>
      </View>
      <Text className="text-sm mb-5 text-center">
        ( Including Servicing and cleaning Charges )
      </Text>
      <TouchableOpacity className="h-[50px] w-full bg-[#79d273] rounded-lg flex justify-center items-center">
        <Text className="text-lg font-semibold text-black">
          Book Appointment
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GeneralServicingBill;

const styles = StyleSheet.create({});
