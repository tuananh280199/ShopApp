import AsyncStorage from '@react-native-community/async-storage';

const getCart = async () => {
        try {
          const value = await AsyncStorage.getItem('@cartArray');
          if (value !== null) {
            return JSON.parse(value);
          }
          else {
              return [];
          }
        } catch (error) {
            console.log(error);
        }
};

export default getCart;