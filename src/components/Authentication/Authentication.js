import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

import icLogo from '../../assets/appIcon/ic_logo.png';
import icBack from '../../assets/appIcon/back_white.png';

export default class Authentication extends Component{
    constructor(props){
        super(props);

        this.state = ({
            isSignIn: true,
        })

        this.goBackToMain.bind(this);
        this.signIn.bind(this);
        this.signUp.bind(this);
        this.gotoSignIn.bind(this);
    }
    
    goBackToMain = () => {
        const { navigation } = this.props;
        navigation.goBack()
    }

    signIn = () => {
        this.setState({ isSignIn : true })
    }

    signUp = () => {
        this.setState({ isSignIn : false })
    }

    gotoSignIn = () => {
        this.setState({ isSignIn: true })
    }

    render(){

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain}/> : <SignUp gotoSignIn={this.gotoSignIn}/>;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        activeOpacity={0.2}
                        onPress={this.goBackToMain}
                    >
                        <Image source={icBack} style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Wearing a Dress</Text>
                    <Image source={icLogo} style={styles.icon}/>
                </View>
                {mainJSX}
                <View style={styles.controlButton}>
                    <TouchableOpacity 
                        style={styles.signIn} 
                        activeOpacity={0.2}
                        onPress={this.signIn}
                    >
                        <Text style={isSignIn ? styles.activeStyle : styles.inActiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.signUp}
                        activeOpacity={0.2}
                        onPress={this.signUp}
                    >
                        <Text style={!isSignIn ? styles.activeStyle : styles.inActiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff66b3',
        padding: 16,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    icon: {
        width: 28,
        height: 28
    },
    title : {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 28
    },
    controlButton: {
        flexDirection: 'row',
        alignSelf: 'stretch' 
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#ff66b3'
    },
    signIn: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUp: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
});