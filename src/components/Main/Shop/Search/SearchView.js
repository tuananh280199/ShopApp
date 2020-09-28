import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import global from '../../../../global/global';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

const url = 'http://192.168.1.240/apiMyShop/images/product/';

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: [],
    };

    global.setSearchListProduct = this.setSearchListProduct.bind(this);
  }

  goToDetailProduct = (detailProduct) => {
    const { navigation } = this.props;
    navigation.navigate('Home', {
        screen: 'DetailProduct',
        params: {product : detailProduct}   
    });
}

  setSearchListProduct = (arrProduct) => {
    this.setState({listProduct: arrProduct});
  };

  render() {
    const {
      product,
      mainRight,
      txtMaterial,
      txtColor,
      txtName,
      txtPrice,
      productImage,
      txtShowDetail,
      wrapper,
      lastRowInfo,
    } = styles;
    return (
      <SafeAreaView style={wrapper}>
        <FlatList
          data={this.state.listProduct}
          renderItem={({item}) => (
            <View style={product}>
              <Image
                source={{uri: `${url}${item.images[0]}`}}
                style={productImage}
              />
              <View style={mainRight}>
                <Text style={txtName}>{toTitleCase(item.name)}</Text>
                <Text style={txtPrice}>{item.price}$</Text>
                <Text style={txtMaterial}>Material {item.material}</Text>
                <View style={lastRowInfo}>
                  <Text style={txtColor}>Color {item.color}</Text>
                  <View
                    style={{
                      backgroundColor: item.color.toLowerCase(),
                      height: 16,
                      width: 16,
                      borderRadius: 8,
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={() => this.goToDetailProduct(item)}
                  >
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const {width} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#2E2728',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: {width: 0, height: 3},
    elevation: 8,
    margin: 8,
  },
  product: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
    shadowColor: '#2E2728',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: {width: 0, height: 0},
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
    justifyContent: 'space-between',
  },
  productController: {
    flexDirection: 'row',
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtName: {
    paddingLeft: 20,
    color: '#662F90',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 20,
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtColor: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtShowDetail: {
    color: '#B10D65',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
  viewColor: {
    backgroundColor: 'cyan',
    height: 14,
    width: 14,
    borderRadius: 8,
  },
});

export default SearchView;
