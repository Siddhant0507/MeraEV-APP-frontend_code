import {Button, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import macImage from '../Public/Images/MechanicImage.jpeg';

const FirstScreen = ({navigation}) => {
  return (
    <View className="flex justify-center items-center px-5 h-full">
      <Image
        source={macImage}
        className="h-[300px] w-full cover rounded-xl mb-5"
      />
      <Text className="font-bold text-3xl text-black text-center">
        Electrify Your Ride, Empower Your Journey!
      </Text>
      <Text className="font-semibold text-xl my-5 text-center">
        Effortless EV 2-Wheeler Servicing and Repairs
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        className="h-[55px] bg-white w-full m-3 flex items-center justify-center rounded-xl border-[1px]">
        <Text className="text-lg font-semibold text-black">LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        className="h-[55px] w-full bg-[#31A062] m-3  flex items-center justify-center rounded-xl ">
        <Text className="text-lg font-semibold text-white">
          CREATE AN ACCOUNT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstScreen;
