import { View, ImageBackground, Pressable, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../../infracstruture/theme';

const NewsCard = ({ newsItem }) => {
  const navigation = useNavigation();

  const { urlToImage, title } = newsItem;

  return (
    <Pressable
      onPress={() => navigation.navigate('NewsArticle', { data: newsItem })}>
      <ImageBackground
        source={{
          uri: urlToImage,
        }}
        style={styles.imageBackground}>
        <View style={styles.content}>
          <View style={styles.bookmarkIcon}>
            <Icon name="bookmark" size={30} color={theme.colors.white} />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default NewsCard;
