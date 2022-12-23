import { View, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { theme } from '../../../../infracstruture/theme';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color={theme.colors.greyDarker} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default SearchComponent;
