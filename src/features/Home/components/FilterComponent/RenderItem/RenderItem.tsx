import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { RenderItemType } from '..';
import styles from './styles';
import { theme } from '../../../../../infracstruture/theme';
import { fetchNews } from '../../../../../infracstruture/Redux/slice/newsSlice';
import { useDispatch } from 'react-redux';

const RenderItem = ({ item, onSelect }: RenderItemType) => {
  const dispatch = useDispatch();

  const handleFetch = React.useCallback(
    item => dispatch(fetchNews(item.name)),
    [dispatch],
  );
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        {
          backgroundColor: item.selected
            ? theme.colors.primary
            : theme.colors.greyDarker,
        },
      ]}
      onPress={() => handleFetch(item)}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </Pressable>
  );
};

export default RenderItem;
