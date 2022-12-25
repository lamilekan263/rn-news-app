import { View, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { theme } from '../../../../infracstruture/theme';
import { useDispatch } from 'react-redux';
import {
  fetchNews,
  filterNews,
} from '../../../../infracstruture/Redux/slice/newsSlice';

const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleSearchHandler = React.useCallback(e => {
    if (e === '') {
      dispatch(fetchNews('general'));
    } else {
      dispatch(filterNews(e));
    }
  }, []);
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color={theme.colors.greyDarker} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={e => handleSearchHandler(e)}
      />
    </View>
  );
};

export default SearchComponent;
