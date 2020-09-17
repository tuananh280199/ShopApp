import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/components/Main/Main';
import Authentication from './src/components/Authentication/Authentication';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
import OrderHisory from './src/components/OrderHistory/OrderHistory';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
          <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false }}/>
          <Stack.Screen name="ChangeInfo" component={ChangeInfo} options={{ headerShown: false }}/>
          <Stack.Screen name="OrderHisory" component={OrderHisory} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
