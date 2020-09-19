import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Collecttion from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
    render() {
        return (
          <ScrollView style={{flex: 1}}>
            <View>
              <Collecttion />
              <Category />
              <TopProduct />
            </View>
          </ScrollView>
        );
    }
}

export default Home;