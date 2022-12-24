import { View, Text, ImageBackground, Pressable, Share } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { format } from 'date-fns';
import styles from './styles';
import { theme } from '../../../../infracstruture/theme';
import { useNavigation, useRoute } from '@react-navigation/native';

type DataType = {
  publishedAt: string;
  title: string;
  content: string;
  urlToImage: string;
};

const NewsArticle = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { params } = route;
  const { publishedAt, title, content, urlToImage }: DataType = params.data;

  return (
    <View>
      <ImageBackground
        source={{
          uri: urlToImage,
        }}
        style={styles.image}>
        <View style={{ marginTop: 50, paddingHorizontal: theme.spacing.xxl }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-back-outline"
                size={30}
                color={theme.colors.white}
              />
            </Pressable>
            <View>
              
              <Icon name="bookmark" size={30} color={theme.colors.white} />
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.newsContainer}>
        <View>
          <Text style={styles.newsTitle}>{title}</Text>
          <View>
            <View style={styles.dateContainer}>
              <Text>Published date</Text>
              <Text style={styles.date}>
                {format(new Date(publishedAt), 'MM/dd/yyyy')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContentContainer}>
          <Text style={styles.newsContent}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsArticle;
