import React from 'react';

import {store} from './redux/store';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
