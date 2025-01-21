// AsyncStorageSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null; // or handle the error appropriately
  }
};

//Example usage:
storeData('myKey', { name: 'John Doe', age: 30 }).then(() => {
  getData('myKey').then(value => console.log('Retrieved value:', value));
});