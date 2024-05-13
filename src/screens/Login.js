import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/features/auth/authSlice';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  const dispatch = useDispatch();

  const HandleLogin = async () => {
    try {
      if (!phoneNumber) {
        Alert.alert('Error', 'Please enter your phone number');
        return;
      }
      if (phoneNumber.length !== 10) {
        Alert.alert("Warning", "Please enter valid phone number");
      }
      else {
        const data = {
          Phonemuber: phoneNumber,
          islogin: true
        }
        const response = await dispatch(loginThunk(phoneNumber));
        if (response?.success) {
          // const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
          // console.log("confirmationconfirmation", confirmation);
          // setConfirm(confirmation);
          // navigation.navigate('OtpScreen', { data, response ,confirmation});
          navigation.navigate('OtpScreen', { data, response });

        }
      }

    } catch (error) {
      console.log(error.response.data);
      Alert.alert("Somthing went wrong");
    }
  };

  return (
    <View className="mt-20 mx-4 ">
      <Text className="font-bold text-4xl text-black text-center mb-4">
        Login With Phone Number
      </Text>
      <Text className="font-semibold text-xl my-5 text-center">
        This Phone Number will be used for further communication and booking
        related details by the app
      </Text>
      <TextInput
        className="h-[55px] bg-white w-full rounded-xl border-[0.5px] text-lg pl-4 mt-3"
        onChangeText={setPhoneNumber}
        placeholder="Enter Your Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
      />
      <TouchableOpacity
        onPress={HandleLogin}
        className="h-[55px] w-full bg-[#31A062] flex items-center justify-center rounded-xl mt-6 ">
        <Text className="text-lg font-semibold text-white">LOGIN</Text>
      </TouchableOpacity>

      <Text className="mt-5 text-black text-lg text-center">
        Don't Have An Account ?{' '}
        <Text
          onPress={() => navigation.navigate('Signup')}
          className="text-[#31A062] font-semibold underline">
          Create Account{' '}
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
