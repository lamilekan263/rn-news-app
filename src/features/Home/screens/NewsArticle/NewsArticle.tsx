import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { theme } from '../../../../infracstruture/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addNewBookmark } from '../../../../infracstruture/Redux/slice/bookmarkSlice';
import { useDispatch } from 'react-redux';
import { dateFormat } from '../../../../utils/utils';

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
  const dispatch = useDispatch();
  return (
    <View>
      <StatusBar translucent barStyle="light-content" backgroundColor="white" />
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
            <Pressable onPress={() => dispatch(addNewBookmark(params.data))}>
              <Icon name="bookmark" size={30} color={theme.colors.white} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.newsContainer}>
        <View>
          <Text style={styles.newsTitle}>{title}</Text>
          <View>
            <View style={styles.dateContainer}>
              <Text>Published date</Text>
              <Text style={styles.date}>{dateFormat(publishedAt)}</Text>
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
