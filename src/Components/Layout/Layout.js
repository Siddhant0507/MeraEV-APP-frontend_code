import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
      <StatusBar />
      <View>{children}</View>
      <View className="flex flex-1 justify-end p-3 bg-white w-full z-10 border-slate-500 border-t-1 absolute bottom-0">
        <Footer />
      </View>
    </>
  );
};

export default Layout;
