import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BookMark from '../../../features/Bookmark/screens';
import Home from '../../../features/Home/screens';
import Profile from '../../../features/Profile/screens';

const BottomNav = createBottomTabNavigator();
const MainApp = () => {
  return (
    <BottomNav.Navigator screenOptions={{ headerShown: false }}>
      <BottomNav.Screen name="Home" component={Home} />
      <BottomNav.Screen name="Bookmark" component={BookMark} />
      <BottomNav.Screen name="Profile" component={Profile} />
    </BottomNav.Navigator>
  );
};

export default MainApp;
