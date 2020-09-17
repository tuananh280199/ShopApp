import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHisory from '../OrderHistory/OrderHistory';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.goToAuthentication.bind(this);
        this.goToChangeInfo.bind(this);
        this.goToOrderHistory.bind(this);
    }
    

    goToAuthentication = () => {
        const { navigation } = this.props;
        navigation.push('Authentication')
    }

    goToChangeInfo = () => {
        const { navigation } = this.props;
        navigation.push('ChangeInfo')
    }

    goToOrderHistory = () => {
        const { navigation } = this.props;
        navigation.push('OrderHisory')
    }

    render(){
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator initialRouteName="Shop">
                <Drawer.Screen name="Shop" component={Shop}/>
                <Drawer.Screen name="Authentication" component={Authentication} />
                <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
                <Drawer.Screen name="OrderHisory" component={OrderHisory} />
            </Drawer.Navigator>
        );
    }
};