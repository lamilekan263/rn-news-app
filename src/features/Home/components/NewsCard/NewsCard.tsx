import { View, Text, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const NewsCard = ({ newsItem }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('NewsArticle')}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=800',
        }}
        style={styles.imageBackground}>
        <View style={styles.content}>
          <View>
            {' '}
            <Icon name="access-alarms" size={30} color="#900" />
          </View>
          <View>
            {/* <Text style={styles.title}>{newsItem?.title}</Text> */}
            {/* <Text style={styles.subtitle}>
              The latest situation in the presidential election
            </Text> */}
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default NewsCard;
