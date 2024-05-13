import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [email, onChangeEmail] = useState('');
  const [confirm, setConfirm] = useState(null);

  const handleSignup = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(`+91${number}`);
      setConfirm(confirmation);
      const data = {
        name: text,
        Phonemuber: number,
        email: email
      }

      navigation.navigate('OtpScreen', { data, confirmation });

    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'Failed to sign up. Please try again.');
    }
    // dispatch(registerThunk("speakly@gmail.com", "123698745"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <Text style={styles.subtitle}>
        "Seamless Service and Repairs for a Greener Ride – Charging Ahead with
        Expertise and Excellence."
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Full Name"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email Address"
          value={email}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignup}
        style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already Have An Account ?{' '}
        <Text
          style={styles.signInLink}
          onPress={() => navigation.navigate('Signin')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 55,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    height: 55,
    width: '100%',
    backgroundColor: '#31A062',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  signInLink: {
    color: '#31A062',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Signup;
