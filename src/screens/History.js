import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from '../Components/Layout/Layout';

import {useDispatch, useSelector} from 'react-redux';
import OrderDetails from '../../redux/features/orderInfo/orderSlice';

const History = () => {
  const dispatch = useDispatch();
  const orderData = useSelector(state => state.order.orderData);
  const loading = useSelector(state => state.order.loading);
  const error = useSelector(state => state.order.error);
  useEffect(() => {
    dispatch(OrderDetails());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  if (!orderData) {
    return <Text>No order data available</Text>;
  }

  return (
    <Layout>
      <Text>order Name: {order.orderData}</Text>
      <Text>Service Type: {orderData.serviceType}</Text>
      <Text>Bike Name: {orderData.bikename}</Text>
      <Text>Date of Service: {orderData.dateOfService}</Text>
      <Text>Cost: {orderData.cost}</Text>
    </Layout>
  );
};

export default History;

const styles = StyleSheet.create({});
