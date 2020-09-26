import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import register from '../../networking/register';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = ({
            name: '',
            email: '',
            password: '',
            rePassword: ''
        })
        this.registerUser.bind(this);
    }

    registerUser = () => {
        const { name, email, password } = this.state;
        register(email, name, password)
            .then(res => res.text())
            .then(text => {
                if(text === "THANH_CONG") this.onSuccessed();
                else this.onFailed();
            })
            .catch(error => console.log(error));
    }

    onSuccessed = () => {
        Alert.alert(
            "Notice",
            "Sign Up Successfully",
            [
                { 
                    text: "OK", 
                    onPress: () => {
                        this.setState({
                            name: '',
                            email: '',
                            password: '',
                            rePassword: ''
                        });
                        this.props.gotoSignIn();
                    }
                }
            ],
            { cancelable: false }
        );
    }

    onFailed = () => {
        Alert.alert(
            "Notice",
            "Email has been used by other",
            [
                { 
                    text: "OK", 
                    onPress: () => this.setState({
                        email: '',
                    }) 
                }
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChangeText={(text) => {this.setState({ name: text })}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({ email: text })}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={(text) => {this.setState({ password: text })}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Re-enter your password"
                    secureTextEntry
                    value={this.state.rePassword}
                    onChangeText={(text) => {this.setState({ rePassword: text })}}
                />
                <TouchableOpacity
                    style={styles.bigButton}
                    activeOpacity={0.2}
                    onPress={this.registerUser}
                >
                    <Text style={styles.bigButtonText}>SIGN UP NOW</Text>
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

export default SignUp;
