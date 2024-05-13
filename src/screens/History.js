import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Layout from '../Components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { allOrderThunk, myOrderThunk } from '../../redux/features/orderInfo/orderSlice';

const History = () => {
  const dispatch = useDispatch();
  const [myorderData, setMyOrderData] = useState([]);
  const [allorderData, setAllOrderData] = useState([]);


  useEffect(() => {
    const fetchMyOrderData = async () => {
      try {
        const response = await dispatch(myOrderThunk());
        setMyOrderData(response?.order);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchMyOrderData();
    fetchAllOrderData();
  }, []);

  const fetchAllOrderData = async () => {
    try {
      const response = await dispatch(allOrderThunk());
      setAllOrderData(response?.allOrders);
      console.log("responseresponse", response);
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  };

  return (
    <Layout>
      <Text style={styles.header}>Order History</Text>
      <FlatList
        data={myorderData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text style={styles.serviceType}>{item?.serviceType}</Text>
            <Text style={styles.date}>{item?.dateOfService}</Text>
          </View>
        )}
      />
      <Text style={styles.header}>All Order History</Text>
      <FlatList
        data={allorderData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text style={styles.serviceType}>{item?.serviceType}</Text>
            <Text style={styles.date}>{item?.dateOfService}</Text>
          </View>
        )}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  orderContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  serviceType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
});

export default History;
