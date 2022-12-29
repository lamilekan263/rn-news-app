import AsyncStorage from '@react-native-async-storage/async-storage';

export const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error.message);
    }
  },

  async getItem(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        return jsonValue;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error.message);
    }
  },
};
