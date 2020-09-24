import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

import backList from '../../../../assets/appIcon/backList.png';
import sp1 from '../../../../assets/temp/sp1.jpeg';

const { height } = Dimensions.get('window');

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
        const { container, wrapper, header, title, iconBack,
                productContainer, productInfo, productImage,
                lastRowInfo, txtName, txtPrice, txtMaterial,
                txtColor, viewColor, txtShowDetail } = styles;
        return (
          <View style={container}>
            <View style={header}>
              <TouchableOpacity activeOpacity={0.2} onPress={this.goBack}>
                <Image source={backList} style={iconBack} />
              </TouchableOpacity>
              <Text style={title}>List Dress</Text>
              <View style={{width: 30}} />
            </View>
            <ScrollView style={wrapper}>
              <View style={productContainer}>
                <Image source={sp1} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
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
              <View style={productContainer}>
                <Image source={sp1} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
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
              <View style={productContainer}>
                <Image source={sp1} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
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
              <View style={productContainer}>
                <Image source={sp1} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
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
              <View style={productContainer}>
                <Image source={sp1} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
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
              <View style={productContainer}>
                <Image source={sp1} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
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
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 10,
        borderRadius: 8,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 8,
        margin: 8,
        fontFamily: 'Avenir'
    },
    wrapper: {
        backgroundColor: '#fff',
    },
    header: {
        height : height / 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    iconBack: {
        height : 30,
        width: 30  
    },
    title: {
        color: '#B10D65',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical : 12,
        borderTopColor: '#D6D6D6',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 15
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        color: '#662F90',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 20
    },
    txtPrice: {
        color: '#ff6666',
        fontFamily: 'Avenir'
    }, 
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    }, 
    viewColor: {
        backgroundColor: 'cyan',
        height: 14,
        width: 14,
        borderRadius: 8
    },
    txtShowDetail: {
        color: '#B10D65',
        fontFamily: 'Avenir',
        fontSize: 12
    }
});

export default ListProduct;