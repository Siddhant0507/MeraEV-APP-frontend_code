import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from '../screens/FirstScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Homepage from '../screens/Homepage';
import Profile from '../screens/Profile';
import History from '../screens/History';
import VehicleRepairInfo from '../screens/VehicleRepairInfo';
import GridBtn from '../Components/HomeGridBtn/GridBtn';
import GeneralServicingDetails from '../screens/GeneralServicingDetails';
import GeneralServicingBill from '../screens/GeneralServicingBill';
import GeneralServicingDateTime from '../screens/GeneralServicingDateTime';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
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
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return <AuthStack />;
};

export default MainStack;
