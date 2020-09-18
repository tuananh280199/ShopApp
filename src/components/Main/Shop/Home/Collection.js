import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import bannerImage from '../../../../assets/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{flex: 1}}>
                    <Text style={textStyle}>Spring Collection</Text>
                </View>
                <View style={{flex: 5}}>
                    <Image source={bannerImage} style={imageStyle}/>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = ( imageWidth / 933) * 465; //kích thước ảnh : 933x465

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        padding : 12,
        paddingTop: 7,
        borderRadius: 4,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 8,
        margin: 8
    },
    textStyle: {
        fontSize: 20,
        color: 'gray',
        textTransform: "uppercase"
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight
    }
});

export default Collection;