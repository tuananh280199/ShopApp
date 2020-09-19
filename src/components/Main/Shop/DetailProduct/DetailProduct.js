import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class DetailProduct extends Component {
    constructor(props){
        super(props);

        this.goBackToHomeView.bind(this);
    }

    goBackToHomeView = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#D6D6D6'}}>
                <TouchableOpacity
                    onPress={this.goBackToHomeView}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DetailProduct;