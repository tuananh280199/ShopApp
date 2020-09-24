import React, { Component } from 'react';
import { View, Text,TextInput, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import icLogo from '../../../assets/appIcon/ic_logo.png';
import icMenu from '../../../assets/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    render() {
        return (
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.props.onToggleMenu}>
                <Image source={icMenu} style={styles.icon}/>
              </TouchableOpacity>
              <Text style={styles.title}>Wearing a Dress</Text>
              <Image source={icLogo} style={styles.icon}/>
            </View>
            <TextInput 
                style={styles.textInput}
                placeholder="What do you want to buy?"
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#ff4da6',
        padding: 9,
        justifyContent: 'space-around'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 28,
        height: 28
    },
    title : {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    textInput: {
        height: height / 23,
        backgroundColor: 'white',
        paddingVertical: 0,
        paddingLeft: 5,
        borderRadius: 4
    }
});

export default Header;
