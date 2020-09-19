import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

import icLogo from '../../assets/appIcon/ic_logo.png';
import icBack from '../../assets/appIcon/back_white.png';

const { width } = Dimensions.get('window');

export default class Authentication extends Component{
    constructor(props){
        super(props);

        this.state = ({
            isSignIn : true
        })

        this.goBackToMain.bind(this);
        this.signIn.bind(this);
        this.signUp.bind(this);
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

    render(){

        const signInJSX = (
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your password"
            />
            <TouchableOpacity
              style={styles.bigButton}
              activeOpacity={0.2}
              onPress={this.goBackToMain}
            >
              <Text style={styles.bigButtonText}>SIGN IN NOW</Text>
            </TouchableOpacity>
          </View>
        );

        const signUpJSX = (
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your name"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your password"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Re-enter your password"
            />
            <TouchableOpacity
              style={styles.bigButton}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <Text style={styles.bigButtonText}>SIGN UP NOW</Text>
            </TouchableOpacity>
          </View>
        );

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;

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
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingHorizontal: 15
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigButtonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '500'
    }
});