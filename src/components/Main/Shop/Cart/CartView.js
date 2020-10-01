import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, 
    Dimensions, StyleSheet, Image,
    SafeAreaView, FlatList, Alert
} from 'react-native';

import getToken from '../../../../AsyncStorage/getToken';

import global from '../../../../global/global';

import sendOrder from '../../../../networking/sendOrder';

const url = 'http://192.168.1.240/apiMyShop/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
    constructor(props){
        super(props);

        this.onSendOrder = this.onSendOrder.bind(this);
    }

    increaseQuantityOfThis = (productId) => {
        global.increaseQuantity(productId);
    }

    decreaseQuantityOfThis = (productId) => {
        global.decreaseQuantity(productId);
    }

    removeProductOfThis = (productId) => {
        global.removeProduct(productId);
    }

    //vì có nhiều phương thức bất đồng bộ (lấy token và gửi request lên server) => dùng async await
    async onSendOrder(){
        try {
            const token = await getToken();
            const arrayDetail = this.props.cardArray.map(e => ({
                id: e.product.id,
                quantity: e.quantity
            }));
            const result = await sendOrder(token,arrayDetail);
            if(result === "THEM_THANH_CONG") {
                Alert.alert(
                    "Notice",
                    "Send Order Successfully",
                    [
                        { 
                            text: "OK", 
                            onPress: () => {}
                        }
                    ],
                    { cancelable: false }
                );
            }
            else {
                Alert.alert(
                    "Notice",
                    "Send Order Failed",
                    [
                        { 
                            text: "OK", 
                            onPress: () => {}
                        }
                    ],
                    { cancelable: false }
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
        product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct, showDetailContainer } = styles;
        const { cardArray } = this.props;
        const arrayTotalPriceItem = cardArray.map(item => item.product.price * item.quantity);
        const totalPrice = arrayTotalPriceItem.reduce( (a,b) => a + b, 0);
        return (
          <View style={wrapper}>
            <SafeAreaView style={main}>
                    <FlatList
                        data={cardArray}
                        renderItem={({item}) => (
                            <View style={product}>
                            <Image source={{ uri : `${url}${item.product.images[0]}`}} style={productImage} />
                            <View style={[mainRight]}>
                                <View
                                style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}>
                                <Text style={txtName}>{toTitleCase(item.product.name)}</Text>
                                <TouchableOpacity
                                    onPress={() => this.removeProductOfThis(item.product.id)}
                                >
                                    <Text style={{fontFamily: 'Avenir', color: '#969696'}}>
                                    X
                                    </Text>
                                </TouchableOpacity>
                                </View>
                                <View>
                                <Text style={txtPrice}>{item.product.price}$</Text>
                                </View>
                                <View style={productController}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity
                                        onPress={() => this.increaseQuantityOfThis(item.product.id)}
                                    >
                                        <Text style={{fontSize: 19}}>+</Text>
                                    </TouchableOpacity>
                                        <Text style={{fontSize: 19}}>{item.quantity}</Text>
                                    <TouchableOpacity
                                        onPress={() => this.decreaseQuantityOfThis(item.product.id)}
                                    >
                                        <Text style={{fontSize: 19}}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={showDetailContainer}/>
                                </View>
                            </View>
                            </View>
                        )}
                        keyExtractor={item => item.product.id}
                    />
                </SafeAreaView>
            <TouchableOpacity 
                activeOpacity={0.2}
                style={checkoutButton}
                onPress={this.onSendOrder}
            >
              <Text style={checkoutTitle}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 453) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#ff66b3',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        flex: 1,
        padding : 8,
        borderRadius: 8,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.2,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 4,
        margin: 8,
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        padding : 10,
        borderRadius: 4,
        backgroundColor : '#FFF',
        shadowColor: '#2E2728',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 3},
        elevation: 8,
        margin: 4,
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default CartView;