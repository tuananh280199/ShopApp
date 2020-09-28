import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import initData from '../../../networking/initData';
import saveCart from '../../../AsyncStorage/saveCart';
import getCart from '../../../AsyncStorage/getCart';

import global from '../../../global/global';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

class Shop extends Component {
    constructor(props){
        super(props);

        this.state = {
          types : [],
          topProducts : [],
          cardArray : []
          // isLoading: true
        };

        this.toggleMenu.bind(this);
        global.addProductToCart = this.addProductToCart.bind(this);
        global.increaseQuantity = this.increaseQuantity.bind(this);
        global.decreaseQuantity = this.decreaseQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.goToSearch = this.goToSearch.bind(this);
    }

    componentDidMount(){
      initData()
        .then((json) => {
          this.setState({ types: json.type, topProducts: json.product });
        })
        .catch((error) => console.error(error));
        // .finally(() => {
        //   this.setState({isLoading: false});
        // });
      getCart()
        .then((cartArr) => this.setState({ cardArray: cartArr }));
    }
    
    toggleMenu = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    }

    goToSearch = () => {
      const { navigation } = this.props;
      navigation.jumpTo('Search'); //jumpTo là event của TabBottomNavigation
    }

    addProductToCart = (product) => { //setState là phương thức bất đồng bộ => có callback function
      const checkProductInCard = this.state.cardArray.find(item => item.product.id === product.id);
      if(checkProductInCard === undefined){
        this.setState(
          {cardArray: this.state.cardArray.concat({product, quantity: 1})},
          () => saveCart(this.state.cardArray)
        ) //(product: product) === product
      }
      else{
        Alert.alert(
          "Notice",
          "This product is already in the shopping cart",
          [
              { 
                  text: "OK", 
                  onPress: () => {}
              }
          ],
          { cancelable: false }
        );
      }
    }

    increaseQuantity = (productId) => {
      const newCart = this.state.cardArray.map(item => {
        if(item.product.id !== productId) return item;
        return { product: item.product, quantity: item.quantity + 1 }
      })
      this.setState(
        { cardArray: newCart},
        () => saveCart(this.state.cardArray)
      );
    }

    decreaseQuantity = (productId) => {
      const newCart = this.state.cardArray.map(item => {
        if(item.product.id !== productId) return item;
        return { product: item.product, quantity: item.quantity - 1 }
      })
      this.setState(
        { cardArray: newCart},
        () => saveCart(this.state.cardArray)
      );
    }

    removeProduct = (productId) => {
      const newCart = this.state.cardArray.filter(item => item.product.id !== productId); //filter trả về các phần tử thỏa mãn điều kiện
      this.setState(
        { cardArray: newCart},
        () => saveCart(this.state.cardArray)
      );
    }

    render() {
        const Tab = createBottomTabNavigator();
        const { navigation, route } = this.props;
        const { types, topProducts, cardArray } = this.state;
        return (
          <View style={{flex: 1, backgroundColor: '#85A6C9'}}>
            <Header onToggleMenu={this.toggleMenu}/>
            <Tab.Navigator 
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  let iconName;
      
                  if (route.name === "Home") {
                    iconName = "home";
                  } else if (route.name === "Cart") {
                    iconName = "shopping-cart";
                  } else if (route.name === "Search") {
                    iconName = "search";
                  } else if (route.name === "Contact") {
                    iconName = "info-circle";
                  }

                  return <FontAwesome name={iconName} size={23} style={{ color: color }} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#ff3399',
                inactiveTintColor: '#adad85',
                labelStyle: {
                  fontSize: 14,
                },
              }}
            >
              {/* <Tab.Screen name="Home" component={Home} /> */}  
              <Tab.Screen name="Home">
                {() => <Home navigation={navigation} route={route} types={types} topProducts={topProducts}/>}
              </Tab.Screen>
              <Tab.Screen name="Cart"  options={{ tabBarBadge: cardArray.length }}>
                {() => <Cart navigation={navigation} route={route} cardArray={cardArray}/>}
              </Tab.Screen>
              <Tab.Screen name="Search" component={Search} />
              <Tab.Screen name="Contact" component={Contact} />
            </Tab.Navigator>
          </View>
        );
    }
}

export default Shop;