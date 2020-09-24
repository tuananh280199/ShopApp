import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');
const url = 'http://192.168.1.240/apiMyShop/images/type/';

class Category extends Component {
    constructor(props){
        super(props);

        this.goToListProduct.bind(this);
    }

    goToListProduct = () => {
        const { navigation } = this.props;
        // console.log(navigation);
        navigation.push('ListProduct');
    }

    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        const { types } = this.props;
        // console.log(types);
        return (
            <View style={wrapper}>
                <View style={{flex: 1}}>
                    <Text style={textStyle}>List Category</Text>
                </View>
                <View style={{flex: 5}}>
                    <Swiper
                        autoplay
                        loop	
                        autoplayTimeout={2.5}
                        autoplayDirection
                        index={0}
                        showPagination
                    >
                        {
                            types.map(e => (
                                <TouchableOpacity
                                    activeOpacity={0.2}
                                    onPress={this.goToListProduct}
                                    key={e.id}
                                >
                                    <ImageBackground source={{ uri : `${url}${e.image}`}} style={imageStyle}>
                                        <Text style={cateTitle}>{e.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))
                        }
                    </Swiper>
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