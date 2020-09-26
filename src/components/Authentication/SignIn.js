import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import signIn from '../../networking/signIn';
import global from '../../global/global';

import saveToken from '../../AsyncStorage/saveToken';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onSignInOfThis.bind(this);
  }

  onSignInOfThis = () => {
    const {email, password} = this.state;
    signIn(email, password)
      .then(res => res.json())
      .then(res => {
        if(res.user === "SAI_THONG_TIN_DANG_NHAP"){
          this.onFailed()
        }
        else{
          global.onSignIn(res.user);
          this.setState({ email: '', password: '' })
          this.props.goBackToMain();
          saveToken(res.token);
        }
      }) //user đc trả về từ api login
      .catch(() => this.onFailed());
  };

  onFailed = () => {
    Alert.alert(
        "Notice",
        "Wrong email or password ",
        [
            { 
                text: "OK", 
                onPress: () => {}
            }
        ],
        { cancelable: false }
    );
}

  render() {
    const {email, password} = this.state;
    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity
          style={styles.bigButton}
          activeOpacity={0.2}
          onPress={this.onSignInOfThis}>
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
    paddingHorizontal: 15,
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButtonText: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '500',
  },
});

export default SignIn;
