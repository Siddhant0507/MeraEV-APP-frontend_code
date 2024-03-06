import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const GridBtn = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text className="px-5 pb-3 text-2xl font-semibold text-black">
        Our Services{' '}
      </Text>
      <View className="flex flex-row flex-wrap gap-6 p-5 items-center justify-center">
        <TouchableOpacity
          className="h-[77px] w-2/5 bg-[#79d273] rounded-lg flex items-center justify-center"
          onPress={() => navigation.navigate('GeneralServicingDetails')}>
          <Text className="text-base font-semibold text-black">General</Text>
          <Text className="text-base font-semibold text-black">Servicing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="h-[77px] w-2/5 bg-[#79d273] rounded-lg flex items-center justify-center"
          onPress={() => navigation.navigate('VehicleRepairInfo')}>
          <Text className="text-base font-semibold text-black">Vehicle</Text>
          <Text className="text-base font-semibold text-black">Repair</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[77px] w-2/5 bg-[#79d273] rounded-lg flex items-center justify-center">
          <Text className="text-base font-semibold text-black">
            {' '}
            EV Charger
          </Text>
          <Text className="text-base font-semibold text-black">Repair</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[77px] w-2/5 bg-[#79d273] rounded-lg flex items-center justify-center">
          <Text className="text-base font-semibold text-black">Buy Ev</Text>
          <Text className="text-base font-semibold text-black">Charger</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[77px] w-2/5 bg-[#79d273] rounded-lg flex items-center justify-center">
          <Text className="text-base font-semibold text-black">Washing &</Text>
          <Text className="text-base font-semibold text-black">Pollishing</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[77px] w-2/5 bg-[#79d273] rounded-lg flex items-center justify-center">
          <Text className="text-base font-semibold text-black">
            Accessories
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GridBtn;

const styles = StyleSheet.create({});
