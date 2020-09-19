import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHisory from '../OrderHistory/OrderHistory';
import HeaderDrawer from './HeaderDrawer';

export default class Main extends Component{
    constructor(props){
        super(props);
    }
  

    render(){
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator
              initialRouteName="Shop"
              drawerContent={(props) => <HeaderDrawer {...props} />}
            >
              <Drawer.Screen name="Shop" component={Shop} />
              <Drawer.Screen name="Authentication" component={Authentication} />
              <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
              <Drawer.Screen name="OrderHisory" component={OrderHisory} />
            </Drawer.Navigator>
        );
    }
};