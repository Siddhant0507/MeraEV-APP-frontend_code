import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addUserData, registerThunk } from '../../redux/features/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpScreen = ({ route }) => {
  const navigation = useNavigation()
  const [otp, setOTP] = useState('');
  const { confirmation, data, response } = route.params;
  const [userDetails, setUserDetails] = useState(data)
  const dispatch = useDispatch();

  console.log("DATA-=-=-==>", data);


  const handleSubmitOTP = async () => {
    if (otp === '') {
      Alert.alert('Enter OTP', 'Please fill OTP');
    } else {
      try {
        const verifyOTP = await confirmation.confirm(otp);
        if (verifyOTP) {
          if (!userDetails?.islogin) {
            const response = await dispatch(registerThunk(userDetails?.name, userDetails?.Phonemuber, userDetails?.email));
            if (response?.success === true) {
              Alert.alert('Success', response.message, [
                {
                  text: 'OK',
                  onPress: () => {
                    navigation.navigate('Login');
                  },
                },
              ]);
            } else {
              Alert.alert('Error', response.message || 'An error occurred during registration');
            }
          } else {
            dispatch(addUserData(response?.user));
            await AsyncStorage.setItem('token', response?.token);
            navigation.navigate('Home');
          }
        }
      } catch (error) {
        console.log(
          "errorerrorerrorerrorerror", error.response.data

        );
        if (error.response && error.response.data) {
          const errorMessage = error.response.data;
          Alert.alert('Error', errorMessage, [
            {
              text: 'OK',
              onPress: () => {
                if (errorMessage === 'User Already exist.Please Login') {
                  navigation.navigate('Login');
                }
              },
            },
          ]);
        } else {
          Alert.alert('Error', 'Somthing went wrong.');
        }
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text>You have received otp on this number {data?.Phonemuber}</Text>
      <Text style={styles.header}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setOTP}
          value={otp}
          keyboardType="numeric"
          maxLength={6} // Set the maximum length of OTP
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitOTP}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    height: 45,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
