import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import sp1 from '../../../../assets/temp/sp1.jpeg';
import sp2 from '../../../../assets/temp/sp2.jpeg';
import sp3 from '../../../../assets/temp/sp3.jpeg';
import sp4 from '../../../../assets/temp/sp4.jpeg';

const { height, width } = Dimensions.get('window');

class TopProduct extends Component {
    constructor(props){
        super(props);

        this.goToDetailProduct.bind(this);
    }

    goToDetailProduct = () => {
        const { navigation } = this.props;
        navigation.push('DetailProduct');
    }
    render() {
        const { container, titleContainer, body, title, productContainer, productImage, productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>List Category</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity
                        style={productContainer}
                        activeOpacity={0.2}
                        onPress={this.goToDetailProduct}
                    >
                        <Image source={sp1} style={productImage}/>
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>400$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={productContainer}
                        activeOpacity={0.2}
                        onPress={this.goToDetailProduct}
                    >
                        <Image source={sp2} style={productImage}/>
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>400$</Text>
                    </TouchableOpacity>
                    <View style={{height:10, width}}></View>
                    <TouchableOpacity
                        style={productContainer}
                        activeOpacity={0.2}
                        onPress={this.goToDetailProduct}
                    >
                        <Image source={sp3} style={productImage}/>
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>400$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={productContainer}
                        activeOpacity={0.2}
                        onPress={this.goToDetailProduct}
                    >
                        <Image source={sp4} style={productImage}/>
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>400$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const productWidth = (width - 50) / 2;
const producImagetHeight = ( productWidth / 361) * 452; //kích thước ảnh : 933x465

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        padding : 12,
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
    titleContainer: {
        height : 40,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: '#ff66b3',
        textTransform: "uppercase"
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    productContainer: {
        width: productWidth,
        backgroundColor : '#FFF',
        shadowColor: '#2E272B',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 8,
        paddingBottom: 5
    },
    productImage: {
        width: productWidth,
        height: producImagetHeight, 
    },
    productName: {
        marginTop: 5,
        paddingLeft: 10,
        color: '#662F90',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    productPrice: {
        paddingLeft: 10,
        color: '#ff6666',
        fontFamily: 'Avenir'
    },
});

export default TopProduct;