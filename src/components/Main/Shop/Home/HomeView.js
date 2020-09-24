import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Collecttion from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class HomeView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { navigation, types, topProducts} = this.props;
        return (
          <ScrollView style={{flex: 1}}>
            <View>
              <Collecttion navigation={navigation}/>
              <Category navigation={navigation} types={types}/>
              <TopProduct navigation={navigation} topProducts={topProducts}/>
            </View>
          </ScrollView>
        );
    }
}

export default HomeView;