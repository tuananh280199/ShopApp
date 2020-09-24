import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';

import global from '../../../../global/global';

const url = 'http://192.168.1.240/apiMyShop/images/product/';

const back = require('../../../../assets/appIcon/backList.png');
const cart = require('../../../../assets/appIcon/cartfull.png');

class DetailProduct extends Component {
    constructor(props){
        super(props);

        this.goBack.bind(this);
        this.addThisProductToCart = this.addThisProductToCart.bind(this);
    }

    goBack = () => {
        const { navigation, route } = this.props;
        navigation.popToTop();
    }

    addThisProductToCart = () => {
        const { product } = this.props.route.state.routes[0].params.params;
        global.addProductToCart(product);
    }

    render() {
        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        // const { route } = this.props; //console.log xem đường dẫn đến product trong đối tượng route
        // console.log(route);
        const { product } = this.props.route.state.routes[0].params.params;
        const { name, price, color, material, description, images } = product;
        return (
            <View style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.addThisProductToCart}
                        >
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', paddingVertical: 10, height: swiperHeight }} horizontal >
                            {
                                images.map((image,index) => (
                                    <Image source={{ uri : `${url}${image}`}} style={productImageStyle} key={index} />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{price}$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>Material {material}</Text>
                                <View style={{ flexDirection: 'row', justifyContent:'center', alignItems: 'center' }} >
                                <Text style={txtColor}>Color {color}</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: color.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    cardStyle: {
        flex: 1,
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginTop: 10,
        marginHorizontal: 10,
        paddingBottom: 5
    },
    descContainer: {
        margin: 0,
        paddingHorizontal: 12
    },
    descStyle: {
        fontFamily: 'Avenir',
        color: 'gray',
        fontSize: 17
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});

export default DetailProduct;