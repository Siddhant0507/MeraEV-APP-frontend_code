import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
const BikeDetails = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const firstDropdownItems = [
    {label: 'Okinawa', value: 'Okinawa'},
    {label: 'Benling', value: 'Benling'},
    {label: 'Pure EV', value: 'PureEV'},
    {label: 'Ampere', value: 'Ampere'},
    {label: 'Ezyride', value: 'Ezyride'},
  ];

  // Ezyride
  // 1) Opal +
  // 2) Sapphire
  // 3) Pulse

  const secondDropdownItems = {
    Okinawa: [
      {label: 'Praise Pro', value: 'PraisePro'},
      {label: 'I praise +', value: 'Ipraise+'},
      {label: 'Lite', value: 'Lite'},
      {label: 'Ridge + ', value: 'Ridge + '},
      {label: ' R30', value: ' R30'},
      {label: 'Dual', value: 'Dual'},
      {label: 'Oki 90', value: 'Oki 90'},
    ],
    Benling: [
      {label: 'Aura', value: 'Aura'},
      {label: 'Falcon', value: 'Falcon'},
      {label: 'Icon', value: 'Icon'},
      {label: 'Kriti', value: 'Kriti'},
      {label: 'Belive', value: 'Belive'},
    ],
    PureEV: [
      {label: 'ePluto', value: 'ePluto'},
      {label: 'ETRANCE', value: 'ETRANCE'},
    ],
    Ampere: [
      {label: 'Magnus', value: 'Magnus'},
      {label: 'Primus', value: 'Primus'},
      {label: 'Zeal EX', value: 'Zeal EX'},
    ],
    Ezyride: [
      {label: ' Opal +', value: ' Opal +'},
      {label: 'Sapphire', value: 'Sapphire'},
      {label: 'Pulse', value: 'Pulse'},
    ],
  };

  return (
    <React.Fragment>
      <RNPickerSelect
        onValueChange={value => setCategory(value)}
        items={firstDropdownItems}
        value={category}
      />
    </React.Fragment>
  );
};

export default BikeDetails;

const styles = StyleSheet.create({});
