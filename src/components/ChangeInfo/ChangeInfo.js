import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class ChangeInfo extends Component{
    constructor(props){
        super(props);

        this.goBackToMain.bind(this);
    }
    

    goBackToMain = () => {
        const { navigation } = this.props;
        navigation.goBack()
    }
    render(){
        return (
            <View style={{flex : 1, backgroundColor : 'green'}}>
              <Text>ChangeInfo</Text>
              <TouchableOpacity
                    onPress={this.goBackToMain}
                >
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
};