import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Layout from '../Components/Layout/Layout';

const Homepage = ({navigation}) => {
  const handleClick = () => {
    navigation.navigate('Profile');
  };
  return (
    <Layout>
      <Text>Homepage</Text>
    </Layout>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
