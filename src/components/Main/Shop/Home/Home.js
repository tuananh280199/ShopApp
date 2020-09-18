import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Collecttion from './Collection';

class Home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Collecttion />
            </View>
        );
    }
}

export default Home;