import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/EvilIcons';
import SafeAreaComponent from '../../../../components/SafeAreaView';
import { styles } from './styles';
import NewsCard from '../../components/NewsCard/NewsCard';
import SearchComponent from '../../components/SearchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../infracstruture/Redux/store';
import { fetchNews } from '../../../../infracstruture/Redux/slice/newsSlice';

const NewsListings = () => {
  const newsList = useSelector((state: RootState) => state.newsList);
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const { loading, listOfNews } = newsList;

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaComponent>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Browse</Text>
          <Text style={styles.subHeading}>Discover things of this world</Text>
        </View>
        <SearchComponent />
        <FlatList
          data={listOfNews}
          renderItem={({ item }) => <NewsCard newsItem={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaComponent>
  );
};

export default NewsListings;
