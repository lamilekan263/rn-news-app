import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListings from './NewsListings/NewsListings';
import NewsArticle from './NewsArticle/NewsArticle';

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewsListings" component={NewsListings} />
      <Stack.Screen name="NewsArticle" component={NewsArticle} />
    </Stack.Navigator>
  );
};

export default Home;
