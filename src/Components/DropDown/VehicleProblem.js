import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {updateVehicleProblem} from '../../../redux/features/orderInfo/orderSlice';
const VehicleProblem = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('');
  const handleValueChange = itemValue => {
    setSelectedValue(itemValue);
    dispatch(updateVehicleProblem(itemValue));
  };
  return (
    <View>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}>
        <Picker.Item label="Bike not start" value="Bike not start" />
        <Picker.Item label="Brake problem " value="Brake problem" />
        <Picker.Item label="Battery Issue" value="Battery Issue" />
        <Picker.Item label="Motor Issue" value="Motor Issue" />
        <Picker.Item label="Throttle Issue" value="Throttle Issue" />
        <Picker.Item label="Accident issue" value="Accident issue" />
        <Picker.Item label="Switches " value="Switches" />
        <Picker.Item label="Bulbs" value="Bulbs" />
        <Picker.Item label="Speedometer Issue" value="Speedometer Issue" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
    </View>
  );
};

export default VehicleProblem;

const styles = StyleSheet.create({
  picker: {
    width: 'auto',
    height: 50,
    backgroundColor: '#fffffff',
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  pickerItem: {
    fontSize: 20,
    color: 'blue',
  },
});
