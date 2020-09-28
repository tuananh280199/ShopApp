import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

const url = 'http://192.168.1.240/apiMyShop/images/product/';

const { height, width } = Dimensions.get('window');

class TopProduct extends Component {
    constructor(props){
        super(props);
    }

    goToDetailProduct = (detailProduct) => {
        const { navigation } = this.props;
        navigation.navigate('Home', {
            screen: 'DetailProduct',
            params: {product : detailProduct}   
        });
    }
    
    render() {
        const { container, titleContainer, body, title, productContainer, productImage, productName, productPrice } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>Top Product</Text>
                </View>
                <SafeAreaView style={body}>
                    <FlatList
                        data={topProducts}
                        numColumns={2}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={productContainer}
                                activeOpacity={0.2}
                                onPress={() => this.goToDetailProduct(item)}
                            >
                                <Image source={{ uri : `${url}${item.images[0]}`}} style={productImage}/>
                                <Text style={productName}>{item.name}</Text>
                                <Text style={productPrice}>{item.price}$</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const productWidth = (width - 60) / 2;
const producImagetHeight = ( productWidth / 361) * 450; //kích thước ảnh : 933x465

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        padding : 8,
        borderRadius: 8,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.2,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 4,
        margin: 8,
        fontFamily: 'Avenir'
    },
    titleContainer: {
        height : 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3
    },
    title: {
        fontSize: 20,
        color: '#ff66b3',
        textTransform: "uppercase"
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productContainer: {
        width: productWidth,
        backgroundColor : '#FFF',
        shadowColor: '#2E272B',
        shadowOpacity : 0.2,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 4,
        paddingBottom: 5,
        margin: 7,
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
        fontWeight: '300',
        fontSize: 17
    },
    productPrice: {
        paddingLeft: 10,
        color: '#ff6666',
        fontFamily: 'Avenir',
        fontSize: 14
    },
});

export default TopProduct;