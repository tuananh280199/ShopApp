import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Dimensions } from 'react-native';

import sp1 from '../../../../assets/temp/sp1.jpeg';
import sp4 from '../../../../assets/temp/sp4.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {
    constructor(props){
        super(props);

        this.goToDetailProduct.bind(this);
    }
    goToDetailProduct = () => {
        const { navigation } = this.props;
        navigation.push('DetailProduct');
    }
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, wrapper,
            lastRowInfo,viewColor
        } = styles;
        return (
          <ScrollView style={wrapper}>
            <View style={product}>
              <Image source={sp4} style={productImage} />
              <View style={mainRight}>
                <Text style={txtName}>{toTitleCase('black dress')}</Text>
                <Text style={txtPrice}>100$</Text>
                <Text style={txtMaterial}>Material Fur</Text>
                <View style={lastRowInfo}>
                  <Text style={txtColor}>Color RoyalBlue</Text>
                  <View style={viewColor} />
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={this.goToDetail}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={product}>
              <Image source={sp4} style={productImage} />
              <View style={mainRight}>
                <Text style={txtName}>{toTitleCase('black dress')}</Text>
                <Text style={txtPrice}>100$</Text>
                <Text style={txtMaterial}>Material Fur</Text>
                <View style={lastRowInfo}>
                  <Text style={txtColor}>Color RoyalBlue</Text>
                  <View style={viewColor} />
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={this.goToDetail}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding : 8,
        borderRadius: 8,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 8,
        margin: 8,
    },
    product: {
        flexDirection: 'row',
        padding : 8,
        borderRadius: 4,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 0},
        elevation: 8,
        margin: 8,
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#662F90',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 20
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtShowDetail: {
        color: '#B10D65',
        fontFamily: 'Avenir',
        fontSize: 12
    },
    viewColor: {
        backgroundColor: 'cyan',
        height: 14,
        width: 14,
        borderRadius: 8
    },
});

export default SearchView;