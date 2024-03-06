import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Layout from '../Components/Layout/Layout';
import HomeCarousel from '../Components/Carousel/HomeCarousel';
import GridBtn from '../Components/HomeGridBtn/GridBtn';

const Homepage = ({navigation}) => {
  const handleClick = () => {
    navigation.navigate('Profile');
  };
  return (
    <Layout>
      {/* Crousel Element */}
      <View className="my-5">
        <HomeCarousel />
      </View>

      {/* Grid Buttons */}
      <GridBtn />
    </Layout>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
