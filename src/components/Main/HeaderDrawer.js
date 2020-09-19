import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import profileIcon from '../../assets/temp/profile.png';

const { height, width } = Dimensions.get('window');

export default class HeaderDrawer extends Component {
    constructor(props){
        super(props);

        this.state = ({
            isLoggedIn : false
        })
    }
    render(){
        const { props } = this;
        const { navigation } = props;
        const { isLoggedIn } = this.state;
        const { header, imageProfile, textProfile, btnText, bkTextLogin } = styles;
        const logoutJSX = (
                <View>
                    <View style={header}>
                        <Image source={profileIcon} style={imageProfile}/>
                        <TouchableOpacity 
                            style={bkTextLogin}
                            onPress={() => {
                                navigation.navigate('Authentication')
                            }}>
                            <Text style={btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
        const loginJSX = (
            <View>
                <View style={header}>
                    <Image source={profileIcon} style={imageProfile}/>
                    <Text style={textProfile}>Nguyen Duc Tuan Anh</Text>
                </View>
                <DrawerItemList {...props}/>
                <DrawerItem
                    label="Sign Out"
                    onPress={() => {
                        this.setState({isLoggedIn : false});
                    }}
                />
            </View>
        );
        const MainJSX = isLoggedIn ? loginJSX : logoutJSX;
        return (
            <DrawerContentScrollView {...props}>
                {MainJSX}
            </DrawerContentScrollView>
        );
    }

}

const styles = StyleSheet.create({
    header: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.35,
        backgroundColor: '#ff66b3',
        marginTop: -5
    },
    imageProfile: {
        width: 150,
        height: height * 0.2,
        borderRadius: 75
    },
    textProfile: {
        marginTop: 20,
        fontSize : 19,
        color: 'white'
    },
    bkTextLogin: {
        backgroundColor: 'white',
        paddingHorizontal: 80,
        borderRadius: 8,
        marginTop: 10,
        padding: 10
    },
    btnText: {
        fontSize: 20,
        color: '#ff4da6',
        fontFamily: 'Avenir'
    }
});