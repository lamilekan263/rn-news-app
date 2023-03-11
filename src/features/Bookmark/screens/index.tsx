import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import SafeAreaComponent from '../../../components/SafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../infracstruture/Redux/store';
import {
  BookmarkType,
  fetchBookmarks,
} from '../../../infracstruture/Redux/slice/bookmarkSlice';

import styles from './styles';
import { dateFormat } from '../../../utils/utils';
// import { theme } from '../../../infracstruture/theme';

const BookMark = () => {
  const { loading, bookmarks } = useSelector(
    (state: RootState) => state.bookmarks,
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchBookmarks());
    
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const RenderItem = ({ item }: BookmarkType) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <Image
          source={{ uri: item.urlToImage }}
          style={{ height: 100, width: 100, borderRadius: 10 }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: 5,
            flex: 1,
          }}>
          <Text ellipsizeMode="tail" numberOfLines={3}>
            {item?.description}
          </Text>
          <Text>{dateFormat(item?.publishedAt)}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaComponent>
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>BookMark</Text>
          <Text style={styles.subHeading}>Saved articles to the library</Text>
        </View>
        <View style={{ width: '100%' }}>
          {bookmarks ? (
            <FlatList
              data={bookmarks}
              renderItem={({ item }) => <RenderItem item={item} />}
              keyExtractor={item => item.content}
            />
          ) : (
            <Text>no</Text>
          )}
        </View>
      </View>
    </SafeAreaComponent>
  );
};

export default BookMark;
