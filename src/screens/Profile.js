import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/AntDesign';
import Layout from '../Components/Layout/Layout';

const Profile = () => {
  const navigation = useNavigation();

  handleLogout = async () => {
    navigation.navigate('Login');
  };
  return (
    <Layout>
      <View className="mx-4">
        <Text className="text-4xl font-semibold text-black my-7">Profile</Text>
        <View className="flex items-center gap-3">
          <Icons name="user" size={132} color="#31A062" />
          <Text className="text-xl font-semibold text-black">name</Text>
          <Text className="text-xl font-semibold text-black">phone number</Text>
          <Text className="text-xl font-semibold text-black">emali</Text>
        </View>

        <View className="flex mx-4 gap-4 mt-7">
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            className="w-full h-[55px]  bg-white flex justify-between items-center rounded-xl flex-row px-5">
            <Text className="text-xl font-medium text-black">About US</Text>
            <Icons name="right" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full h-[55px]  bg-white flex justify-between items-center rounded-xl flex-row px-5"
            onPress={() => navigation.navigate('HelpAndSupport')}>
            <Text className="text-xl font-medium text-black">
              Help and Support
            </Text>
            <Icons name="right" size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="w-full h-[55px]  bg-white flex justify-between items-center rounded-xl flex-row px-5">
            <Text className="text-xl font-medium text-black">
              Share Our App
            </Text>
            <Icons name="right" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full h-[55px]  bg-white flex justify-between items-center rounded-xl flex-row px-5"
            onPress={handleLogout}>
            <Text className="text-xl font-medium text-black">Logout</Text>
            <Icons name="right" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Profile;
