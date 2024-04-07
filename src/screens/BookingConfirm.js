import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import BottomBtn from '../Components/BottomButton/BottomBtn';

const BookingConfirm = ({navigation}) => {
  return (
    <>
      <View className="flex-1">
        <View className="flex justify-center items-center h-full">
          <Image
            source={require('../Public/Images/check.jpeg')}
            className="h-[100px] w-[100px]"
          />
          <Text className="text-4xl font-bold text-black my-3">
            Thank You !!!
          </Text>
          <Text className="text-base px-5 text-center">
            Your Booking has been Confirm. Our Executive will contact you
            regarding your booking. Please carry your vehicle to the service
            center at selected Time and Date
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="h-[55px] w-[90%] rounded-md  bg-[#79d273] flex justify-center items-center m-5">
            <Text className="text-lg text-white font-semibold">
              Back to Home Screen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default BookingConfirm;

const styles = StyleSheet.create({});
