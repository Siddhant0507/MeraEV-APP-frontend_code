import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';

import {useDispatch} from 'react-redux';
import {updateSelectedDate} from '../../../redux/features/orderInfo/orderSlice';

const DatePicker = () => {
  const dispatch = useDispatch();
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

  const handleDayPress = day => {
    setSelected(day.dateString);
    dispatch(updateSelectedDate(day.dateString));
  };
  return (
    <View>
      <Calendar
        enableSwipeMonths={true}
        hideExtraDays={true}
        minDate={minDate}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 370,
        }}
        onDayPress={handleDayPress}
        markingType={'custom'}
        markedDates={{
          [selected]: {
            selected: true,
            customStyles: customDayStyle(selected),
          },
        }}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
