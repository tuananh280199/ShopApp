import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

const { height } = Dimensions.get('window');

class Shop extends Component {
    constructor(props){
        super(props);

        this.toggleMenu.bind(this);
    }
    

    toggleMenu = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer()
    }
    render() {
        const Tab = createBottomTabNavigator();
        return (
          <View style={{flex: 1, backgroundColor: '#85A6C9'}}>
            <View style={{height: height / 8}}>
              <TouchableOpacity onPress={this.toggleMenu}>
                <Text>Open Menu</Text>
              </TouchableOpacity>
            </View>
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Cart" component={Cart} />
              <Tab.Screen name="Search" component={Search} />
              <Tab.Screen name="Contact" component={Contact} />
            </Tab.Navigator>
          </View>
        );
    }
}

export default Shop;