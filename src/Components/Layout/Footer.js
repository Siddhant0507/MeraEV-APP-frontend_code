import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between px-5">
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigation.navigate('Home')}>
        <Icons
          name="home"
          size={25}
          style={[styles.icon, route.name === 'Home' && styles.active]}
        />
        <Text style={[styles.iconText, route.name === 'Home' && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigation.navigate('History')}>
        <Icons
          name="book"
          size={25}
          style={[styles.icon, route.name === 'History' && styles.active]}
        />
        <Text
          style={[styles.iconText, route.name === 'History' && styles.active]}>
          History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigation.navigate('Profile')}>
        <Icons
          name="user"
          size={25}
          style={[styles.icon, route.name === 'Profile' && styles.active]}
        />
        <Text
          style={[styles.iconText, route.name === 'Profile' && styles.active]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'black',
  },
  active: {
    color: '#31A062',
  },
  iconText: {
    color: 'black',
    fontSize: 15,
  },
});

export default Footer;
