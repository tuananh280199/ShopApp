import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ListProduct extends Component {
    constructor(props){
        super(props);

        this.goBack.bind(this);
        this.goToDetail.bind(this);
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    goToDetail = () => {
        const { navigation } = this.props;
        navigation.push('DetailProduct');
    }

    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#D6D6D6'}}>
                <TouchableOpacity
                    onPress={this.goBack}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.goToDetail}
                >
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListProduct;