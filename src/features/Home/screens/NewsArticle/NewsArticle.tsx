import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import { theme } from '../../../../infracstruture/theme';
import { useNavigation, useRoute } from '@react-navigation/native';

const NewsArticle = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { params } = route;


  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=800',
        }}
        style={styles.image}>
        <View style={{ marginTop: 50, paddingHorizontal: theme.spacing.xxl }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Text>Go Back</Text>
            </Pressable>
            <View>
              <Text>BookMark</Text>
              <Text>share</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          borderRadius: 20,
          marginTop: -15,
          backgroundColor: 'white',
          height: '100%',
        }}>
        <Text>The latest situation in the presidential election</Text>
      </View>
    </View>
  );
};

export default NewsArticle;
