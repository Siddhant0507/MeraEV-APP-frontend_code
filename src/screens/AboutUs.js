import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const userDetails = useSelector(state => state?.user?.userDetails)
  return (
    <View>
      <Text>{userDetails?.name}</Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({});
