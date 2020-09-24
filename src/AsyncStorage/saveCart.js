import AsyncStorage from '@react-native-community/async-storage';

const saveCart = async (cartArray) => {
    try {
      await AsyncStorage.setItem('@cartArray',JSON.stringify(cartArray)); //setItem chỉ lưu đc giá trị string nên phải dùng JSON.stringify để convert array => string
    } catch (error) {
      console.log(error);
    }
};

export default saveCart;