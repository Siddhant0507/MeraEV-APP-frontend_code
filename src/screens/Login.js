import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const HandleLogin = async () => {
    try {
      if (!phoneNumber) {
        Alert.alert('Error', 'Please enter your phone number');
        return;
      }
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(error.response.data.message);
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
