import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchView from './SearchView';
import DetailProduct from '../../Shop/DetailProduct/DetailProduct';

const Stack = createStackNavigator();

class Search extends Component {
    render() {
        return (
          <Stack.Navigator
            initialRouteName="SearchView"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SearchView" component={SearchView} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
          </Stack.Navigator>
        );
    }
}

export default Search;