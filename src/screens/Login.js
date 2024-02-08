import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const handleSubmit = () => {
    try {
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  const [text, onChangeText] = useState('');
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
        onChangeText={onChangeText}
        placeholder="Enter Your Phone Number"
        keyboardType="numeric"
        value={text}
      />
      <TouchableOpacity
        onPress={handleSubmit}
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
