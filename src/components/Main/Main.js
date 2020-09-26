import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHisory from '../OrderHistory/OrderHistory';
import DrawerCustom from './DrawerCustom';

import getToken from '../../AsyncStorage/getToken';
import saveToken from '../../AsyncStorage/saveToken';
import checkLogin from '../../networking/checkLogin';
import refreshToken from '../../networking/refreshToken';
import global from '../../global/global';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    //get token and check token
    componentDidMount(){
      getToken()
        .then(token => checkLogin(token))
        .then(res => res.json())
        .then(res => global.onSignIn(res.user))
        .catch(error => console.log(error));

      setInterval(() => {
        getToken()
          .then(token => refreshToken(token))
          .then(res => res.text())
          .then(newToken => saveToken(newToken));
      }, 60 * 60 * 1000); //1 giờ refresh lại token để gia hạn thời gian tồn tại của token

    }

    render(){
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator
              initialRouteName="Shop"
              drawerContent={(props) => <DrawerCustom {...props} />}
            >
              <Drawer.Screen name="Shop" component={Shop} />
              <Drawer.Screen name="Authentication" component={Authentication} />
              <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
              <Drawer.Screen name="OrderHisory" component={OrderHisory} />
            </Drawer.Navigator>
        );
    }
};