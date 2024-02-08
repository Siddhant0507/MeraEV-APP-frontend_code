import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {updateName} from '../Redux/Features/UserDetails/UserDetailsSlice';

const Signup = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [email, onChangeEmail] = useState('');

  const dispatch = useDispatch();

  const handleSignup = () => {
    const payload = {
      Name: text,
      Email: email,
      PhoneNumber: number,
    };
    dispatch(updateName(payload));
    navigation.navigate('Home');
  };

  return (
    <View className="mt-20 mx-3 flex h-full">
      <Text className="font-bold text-4xl text-black text-center">
        Create An Account
      </Text>
      <Text className="text-lg text-center mt-3">
        {' '}
        "Seamless Service and Repairs for a Greener Ride – Charging Ahead with
        Expertise and Excellence."
      </Text>
      <View className="my-6">
        <TextInput
          className="h-[55px] bg-white w-full rounded-xl border-[0.5px] text-lg pl-4 mt-3"
          onChangeText={onChangeText}
          placeholder="Full Name"
          value={text}
        />
        <TextInput
          className="h-[55px] bg-white w-full rounded-xl border-[0.5px] text-lg pl-4 mt-3"
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        <TextInput
          className="h-[55px] bg-white w-full rounded-xl border-[0.5px] text-lg pl-4 mt-3"
          onChangeText={onChangeEmail}
          placeholder="Email Address"
          value={email}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignup}
        className="h-[55px] w-full bg-[#31A062] flex items-center justify-center rounded-xl  ">
        <Text className="text-lg font-semibold text-white">Create Account</Text>
      </TouchableOpacity>

      <Text className="mt-5 text-black text-lg text-center">
        Already Have An Account ?{' '}
        <Text className="text-[#31A062] font-semibold underline">Sign In</Text>
      </Text>
    </View>
  );
};

export default Signup;
