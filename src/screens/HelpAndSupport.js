import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HelpAndSupport = () => {
  return (
    <View className="p-3 ">
      <Text className="text-2xl text-black font-bold mb-2">
        Help and Support
      </Text>
      <Text className="text-xl">
        For any Help and Support , do not hesitate to contact us at{' '}
        <Text className="text-blue-500">+91 1234567890 </Text>
        OR <Text className="text-blue-500">abc@gmail.com</Text>{' '}
      </Text>
      <Text className="text-2xl text-blue-500 mt-2">
        10 Days Service Guarantee
      </Text>
      <Text className="text-lg ">
        To avail 10 Days Service Guarantee, contact us at +91 1234567890
      </Text>
    </View>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({});
