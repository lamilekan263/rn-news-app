import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/EvilIcons';
import SafeAreaComponent from '../../../../components/SafeAreaView';
import { styles } from './styles';
import NewsCard from '../../components/NewsCard/NewsCard';
import SearchComponent from '../../components/SearchComponent';

const NewsListings = () => {
  const [news, setNews] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState(false);

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=ac80f53f243240ee8c057d031e1bee67',
      );
      const json = await response.json();
      console.log(json.articles);
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getNews();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" />;
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
          data={news}
          renderItem={({ item }) => <NewsCard newsItem={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaComponent>
  );
};

export default NewsListings;
