import {Alert, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from '../Components/Layout/Layout';

import {useDispatch, useSelector} from 'react-redux';
import {fetchHistory} from '../../redux/features/userHistory/historySlice';

const History = () => {
  const dispatch = useDispatch();
  // const {data} = useSelector(state => state.history);

  // useEffect(() => {
  //   dispatch(fetchHistory());
  // }, [dispatch]);

  return (
    <Layout>
      {/* <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.rating}</Text>
            <Text>{item.imdb_url}</Text>
          </View>
        )}
      /> */}
      {data}
      <Text>hello</Text>
    </Layout>
  );
};

export default History;

const styles = StyleSheet.create({});
