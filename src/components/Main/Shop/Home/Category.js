import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

import maxiIcon from '../../../../assets/temp/maxi.jpg';
import littleIcon from '../../../../assets/temp/little.jpg';
import partyIcon from '../../../../assets/temp/party.jpg';

const { height, width } = Dimensions.get('window');

class Category extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{flex: 1}}>
                    <Text style={textStyle}>List Category</Text>
                </View>
                <View style={{flex: 5}}>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={2}
                        autoplayLoop
                        index={2}
                        showPagination
                        paginationDefaultColor='#cccccc'
                        paginationActiveColor='#ff3399'
                        paginationStyle={{padding:0,justifyContent:'center'}}
                        paginationStyleItem={{width:11,height:11}}
                    >
                        <ImageBackground source={littleIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={maxiIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={partyIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                    </SwiperFlatList>
                </View>
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
        height: imageHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 19,
        fontFamily: 'Avenir',
        color: '#b3ccff'
    }
});

export default Category;