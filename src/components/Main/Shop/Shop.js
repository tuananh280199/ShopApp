import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            <Tab.Navigator 
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused ? "home" : "home-outline";
                  } else if (route.name === 'Cart') {
                    iconName = focused ? "cart" : "cart-outline";
                  } else if (route.name === 'Search') {
                    iconName = focused ? "search" : "search-outline";
                  } else if (route.name === 'Contact') {
                    iconName = focused ? "person" : "person-outline";
                  }

                  return <Ionicons name={iconName} size={size} style={{ color: color }} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#ff3399',
                inactiveTintColor: 'black',
                labelStyle: {
                  fontSize: 14,
                },
              }}
            >
              <Tab.Screen name="Home" component={Home}/>
              <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 3 }}/>
              <Tab.Screen name="Search" component={Search} />
              <Tab.Screen name="Contact" component={Contact} />
            </Tab.Navigator>
          </View>
        );
    }
}

export default Shop;