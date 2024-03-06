import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import GeneralServicingTime from '../Components/DropDown/GeneralServicingTime';

const GeneralServicingDateTime = () => {
  const [selected, setSelected] = useState('');

  const today = new Date();
  const minDate = today.toISOString().split('T')[0];

  const customDayStyle = date => {
    return {
      container: {
        backgroundColor: '#79d273',
      },
      text: {
        color: '#ffff',
      },
    };
  };

  return (
    <View className="p-3">
      <Text className="text-2xl font-bold text-black mb-4">
        Select Servicing Date -
      </Text>
      <Calendar
        enableSwipeMonths={true}
        hideExtraDays={true}
        minDate={minDate}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 370,
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markingType={'custom'}
        markedDates={{
          [selected]: {
            selected: true,
            customStyles: customDayStyle(selected),
          },
        }}
      />
      <Text className="text-2xl font-bold text-black my-3">
        Select Servicing Time -
      </Text>
      <GeneralServicingTime />
    </View>
  );
};

export default GeneralServicingDateTime;

const styles = StyleSheet.create({});
