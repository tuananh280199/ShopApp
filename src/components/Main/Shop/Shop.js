import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

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
            <Header onToggleMenu={this.toggleMenu}/>
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