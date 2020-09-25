import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class SignIn extends Component {
  render() {
    return (
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
  }
}

const styles = StyleSheet.create({
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
})

export default SignIn;
