import React from 'react';
import { View, StyleSheet } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/components/Main/Main';
import Authentication from './src/components/Authentication/Authentication';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
import OrderHisory from './src/components/OrderHistory/OrderHistory';

const Stack = createStackNavigator();

const App = () => {
  return (
      <View style={{flex: 1}}>
        <Main />
      </View>
  );
};

export default App;
