import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import bannerImage from '../../../../assets/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    constructor(props){
        super(props);

        this.gotoListProduct = this.gotoListProduct.bind(this);
    }

    gotoListProduct = () => {
        const {navigation} = this.props;
        navigation.navigate('Home', {
          screen: 'ListProduct',
          params: {category: { name : "SPRING COLLECTION", id: "COLLECTION"}}   
        });
    }

    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{flex: 1}}>
                    <Text style={textStyle}>Spring Collection</Text>
                </View>
                <TouchableOpacity 
                    style={{flex: 5}}
                    activeOpacity={0.2}
                    onPress={this.gotoListProduct}
                >
                    <Image source={bannerImage} style={imageStyle}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = ( imageWidth / 933) * 465; //kích thước ảnh : 933x465

const styles = StyleSheet.create({
    wrapper: {
        justifyContent:'space-between',
        height: height * 0.36,
        padding : 12,
        borderRadius: 8,
        backgroundColor : '#FFF',
        shadowColor: '#2E272B',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 8,
        margin: 8
    },
    textStyle: {
        fontSize: 20,
        color: '#ff66b3',
        textTransform: "uppercase"
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight
    }
});

export default Collection;