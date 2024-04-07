import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {updateSelectedBike} from '../../../redux/features/orderInfo/orderSlice';
const BikeDetails = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const handleValueChange = itemValue => {
    setSelectedValue(itemValue);
    dispatch(updateSelectedBike(itemValue));
  };
  return (
    <View>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}>
        <Picker.Item
          label="Okinawa ( Praise Pro )"
          value="Okinawa ( Praise Pro )"
        />
        <Picker.Item
          label="Okinawa ( I praise + )"
          value="Okinawa ( I praise + )"
        />
        <Picker.Item label="Okinawa ( Lite )" value="Okinawa ( Lite )" />
        <Picker.Item label="Okinawa ( Ridge + )" value="Okinawa ( Ridge + )" />
        <Picker.Item label="Okinawa ( R30 )" value="Okinawa ( R30 )" />
        <Picker.Item label="Okinawa ( Dual )" value="Okinawa ( Dual )" />
        <Picker.Item label="Okinawa ( Oki 90 )" value="Okinawa ( Oki 90 )" />
        <Picker.Item label="Benling ( Aura )" value="Benling ( Aura )" />
        <Picker.Item label="Benling ( Falcon )" value="Benling ( Falcon )" />
        <Picker.Item label="Benling ( Icon )" value="Benling ( Icon )" />
        <Picker.Item label="Benling ( Kriti )" value="Benling ( Kriti )" />
        <Picker.Item label="Benling ( Belive )" value="Benling ( Belive )" />

        <Picker.Item label="PureEV ( ePluto )" value="PureEV ( ePluto )" />
        <Picker.Item label="PureEV ( ETRANCE )" value="PureEV ( ETRANCE )" />

        <Picker.Item label="Ampere ( Magnus )" value="Ampere ( Magnus )" />
        <Picker.Item label="Ampere ( Primus )" value="Ampere ( Primus )" />
        <Picker.Item label="Ampere ( Zeal EX )" value="Ampere ( Zeal EX )" />

        <Picker.Item label="Ezyride ( Opal + )" value="Ezyride ( Opal + )" />
        <Picker.Item
          label="Ezyride ( Sapphire )"
          value="Ezyride ( Sapphire )"
        />
        <Picker.Item label="Ezyride ( Pulse )" value="Ezyride ( Pulse )" />
      </Picker>
    </View>
  );
};

export default BikeDetails;

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
