import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './style';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Icon</Text>
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default SearchComponent;
