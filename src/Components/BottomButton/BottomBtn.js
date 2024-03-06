import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomBtn = props => {
  return (
    <View className="absolute w-full h-[55px] bg-[#79d273] z-10 bottom-0 flex items-center justify-center">
      <Text className="text-white text-xl">{props.name}</Text>
    </View>
  );
};

export default BottomBtn;

const styles = StyleSheet.create({});
