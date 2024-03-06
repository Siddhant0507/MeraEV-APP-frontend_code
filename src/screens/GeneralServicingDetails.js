import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Layout from '../Components/Layout/Layout';
import BottomBtn from '../Components/BottomButton/BottomBtn';

const GeneralServicingDetails = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <Image
          source={require('../Public/Images/repairEv.jpg')}
          className="h-[300px] w-full cover rounded-xl mb-5"
        />
        <View className="px-4">
          <Text className="font-bold text-3xl text-black">
            General Servicing
          </Text>
          <Text className="font-semibold text-lg">
            Basic servicing for electric scooters usually involves the following
            steps:
          </Text>

          <Text className="font-semibold text-black text-lg mt-2">
            1.Tire Maintenance:
          </Text>
          <Text className="text-base ">
            - Check tire pressure and inflate as needed.
          </Text>
          <Text className="text-base ">
            - Inspect for any signs of wear or damage.
          </Text>

          <Text className="font-semibold text-black text-lg mt-2">
            2.Brake Inspection
          </Text>
          <Text className="text-base ">- Examine brake pads for wear.</Text>
          <Text className="text-base ">
            {' '}
            - Adjust or replace brake pads if necessary.
          </Text>
          <Text className="text-base ">
            - Ensure proper brake functionality.
          </Text>

          <Text className="font-semibold text-black text-lg mt-2">
            3.Battery Care:
          </Text>
          <Text className="text-base "> - Monitor battery health</Text>
          <Text className="text-base "> - Clean battery terminals.</Text>

          <Text className="font-semibold text-black text-lg mt-2">
            4.Lighting System:
          </Text>
          <Text className="text-base ">
            {' '}
            - Verify headlights, taillights, and turn signals are working.
          </Text>
          <Text className="text-base ">
            {' '}
            - Replace any malfunctioning bulbs.
          </Text>

          <Text className="font-semibold text-black text-lg mt-2">
            5.Cable and Connection Check:
          </Text>
          <Text className="text-base ">
            {' '}
            - Inspect wiring for frays or damage.
          </Text>
          <Text className="text-base ">
            {' '}
            - Ensuring all connections are secure.
          </Text>

          <Text className="font-semibold text-black text-lg mt-2">
            6.Fasteners and Bolts:
          </Text>
          <Text className="text-base ">
            {' '}
            - Tighten any loose bolts or nuts.
          </Text>
          <Text className="text-base ">
            - Check for any signs of structural issues.
          </Text>

          <Text className="font-semibold text-black text-lg mt-2">
            7.Inspection of Motor and controller.{' '}
          </Text>

          <Text className="font-semibold text-black text-lg mt-2 mb-5">
            8.Wash and Polish
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('GeneralServicingDateTime')}>
        <BottomBtn name={'Proceed'} />
      </TouchableOpacity>
    </>
  );
};

export default GeneralServicingDetails;

const styles = StyleSheet.create({});
