import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeView from './HomeView';
import DetailProduct from '../DetailProduct/DetailProduct';
import ListProduct from '../ListProduct/ListProduct';

class Home extends Component {
    render() {   
        const Stack = createStackNavigator();
        const { types, topProducts, navigation, route } = this.props;
        return (
          <Stack.Navigator
            initialRouteName="HomeView"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="HomeView">
              {() => <HomeView navigation={navigation} types={types} topProducts={topProducts}/>}
            </Stack.Screen>
            <Stack.Screen name="DetailProduct">
              {() => <DetailProduct navigation={navigation} route={route}/>}
            </Stack.Screen>
            <Stack.Screen name="ListProduct">
              {() => <ListProduct navigation={navigation} route={route}/>}
            </Stack.Screen>
          </Stack.Navigator>
        );
    }
}

export default Home;