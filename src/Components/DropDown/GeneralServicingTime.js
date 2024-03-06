import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
const GeneralServicingTime = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View>
      <Text>Select an option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="10:00 AM" value="10:00 AM" />
        <Picker.Item label="11:00 AM" value="11:00 AM" />
        <Picker.Item label="12:00 PM" value="12:00 PM" />
        <Picker.Item label="1:00 PM" value="1:00 PM" />
        <Picker.Item label="2:00 PM" value="2:00 PM" />
        <Picker.Item label="3:00 PM" value="3:00 PM" />
        <Picker.Item label="4:00 PM" value="4:00 PM" />
        <Picker.Item label="5:00 PM" value="5:00 PM" />
        <Picker.Item label="6:00 PM" value="6:00 PM" />
        <Picker.Item label="7:00 PM" value="7:00 PM" />
      </Picker>
    </View>
  );
};

export default GeneralServicingTime;
