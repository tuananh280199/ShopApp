import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartView from './CartView';
import DetailProduct from '../../Shop/DetailProduct/DetailProduct';

const Stack = createStackNavigator();

class Cart extends Component {
  render() {
    const { cardArray } = this.props;
    return (
      <Stack.Navigator
        initialRouteName="CartView"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CartView">
          {() => <CartView cardArray={cardArray}/>}
        </Stack.Screen>
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
      </Stack.Navigator>
    );
  }
}

export default Cart;