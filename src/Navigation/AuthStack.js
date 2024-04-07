import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from '../screens/FirstScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Homepage from '../screens/Homepage';
import Profile from '../screens/Profile';
import History from '../screens/History';
import VehicleRepairInfo from '../screens/VehicleRepairInfo';
import GeneralServicingDetails from '../screens/GeneralServicingDetails';
import GeneralServicingBill from '../screens/GeneralServicingBill';
import GeneralServicingDateTime from '../screens/GeneralServicingDateTime';
import BookingConfirm from '../screens/BookingConfirm';
import HelpAndSupport from '../screens/HelpAndSupport';
import AboutUs from '../screens/AboutUs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import OtpScreen from '../screens/OtpScreen';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const [isAuth, setIsAuth] = useState(null);

  return (
    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleRepairInfo"
        component={VehicleRepairInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GeneralServicingDetails"
        component={GeneralServicingDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GeneralServicingBill"
        component={GeneralServicingBill}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GeneralServicingDateTime"
        component={GeneralServicingDateTime}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingConfirm"
        component={BookingConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{headerTitle: 'Help and Support'}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerTitle: 'About US'}}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleRepair"
        component={VehicleRepairInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return <AuthStack />;
};

export default AuthStack;
