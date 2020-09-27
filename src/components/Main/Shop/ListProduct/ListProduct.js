import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  Alert
} from 'react-native';

import backList from '../../../../assets/appIcon/backList.png';

import getListProductByCate from '../../../../networking/getListProductByCate';

const {height} = Dimensions.get('window');
const url = 'http://192.168.1.240/apiMyShop/images/product/';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class ListProduct extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      listProduct : [],
      page: 1,
      refreshing : false,
    })

    this.arr = []; //chứa các sản phẩm đc thêm vào khi refresh

    this.goBack.bind(this);
  }

  componentDidMount(){
    const {category} = this.props.route.state.routes[0].params.params;
    const idType  = category.id;
    const {page} = this.state;
    getListProductByCate(idType,page)
      .then(arrProduct => {
        this.arr = arrProduct;
        this.setState({listProduct: this.arr});
      })
      .catch(e => console.log(e));
  }

  onRefresh = () => {
    this.setState({ refreshing : true });
    const {category} = this.props.route.state.routes[0].params.params;
    const idType  = category.id;
    const newPage = this.state.page + 1;
    getListProductByCate(idType,newPage)
      .then(arrProduct => {
        this.arr = arrProduct.concat(this.arr);
        this.setState({
          listProduct: this.arr,
          page: newPage,
          refreshing: false
        })
      })
      .catch(() => {
        Alert.alert(
          "Notice",
          "Out of product",
          [
              { 
                  text: "OK", 
                  onPress: () => {}
              }
          ],
          { cancelable: false }
        );
        this.setState({ refreshing : false });
      });
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.popToTop();
  };

  goToDetail = (detailProduct,cate) => {
    const {navigation} = this.props;
    navigation.navigate('Home', {
      screen: 'DetailProduct',
      params: {
        product : detailProduct,
        category: cate
      }   
    });
  };

  render() {
    const {
      container,
      wrapper,
      header,
      title,
      iconBack,
      productContainer,
      productInfo,
      productImage,
      lastRowInfo,
      txtName,
      txtPrice,
      txtMaterial,
      txtColor,
      viewColor,
      txtShowDetail,
      wrapFlatlist
    } = styles;
    const { listProduct,refreshing } = this.state;
    const {category} = this.props.route.state.routes[0].params.params;
    return (
      <View style={container}>
        <View style={wrapper}>
        <View style={header}>
          <TouchableOpacity activeOpacity={0.2} onPress={this.goBack}>
            <Image source={backList} style={iconBack} />
          </TouchableOpacity>
          <Text style={title}>{category.name}</Text>
          <View style={{width: 30}} />
        </View>
        <SafeAreaView style={wrapFlatlist}>
          <FlatList
            data={listProduct}
            renderItem={({item}) => (
              <View style={productContainer}>
                <Image source={{ uri : `${url}${item.images[0]}`}} style={productImage} />
                <View style={productInfo}>
                  <Text style={txtName}>{toTitleCase(item.name)}</Text>
                  <Text style={txtPrice}>{item.price}$</Text>
                  <Text style={txtMaterial}>Material {item.material}</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>Color {item.color}</Text>
                    <View style={{backgroundColor: item.color.toLowerCase(), height: 16, width: 16, borderRadius: 8}} />
                    <TouchableOpacity 
                      activeOpacity={0.2} 
                      onPress={() => this.goToDetail(item,category)}
                    >
                      <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            refreshControl = {
              <RefreshControl 
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }
          />
        </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#2E2728',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: {width: 0, height: 3},
    elevation: 8,
    margin: 8,
    fontFamily: 'Avenir',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: height / 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapFlatlist: {
    flex: 1
  },
  iconBack: {
    height: 30,
    width: 30,
  },
  title: {
    color: '#B10D65',
    fontSize: 20,
  },
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderTopColor: '#D6D6D6',
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderWidth: 1,
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    color: '#662F90',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 20,
  },
  txtPrice: {
    color: '#ff6666',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    fontFamily: 'Avenir',
  },
  txtColor: {
    fontFamily: 'Avenir',
  },
  viewColor: {
    backgroundColor: 'cyan',
    height: 14,
    width: 14,
    borderRadius: 8,
  },
  txtShowDetail: {
    color: '#B10D65',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
});

export default ListProduct;
