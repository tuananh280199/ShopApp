import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/components/Main/Main';
import Authentication from './src/components/Authentication/Authentication';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
import OrderHisory from './src/components/OrderHistory/OrderHistory';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Main"   
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
          <Stack.Screen name="OrderHisory" component={OrderHisory} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
