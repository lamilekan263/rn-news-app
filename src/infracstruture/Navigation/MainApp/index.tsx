import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import BookMark from '../../../features/Bookmark/screens';
import Home from '../../../features/Home/screens';
import Profile from '../../../features/Profile/screens';
import { theme } from '../../theme';

const BottomNav = createBottomTabNavigator();
const MainApp = () => {
  return (
    <BottomNav.Navigator screenOptions={{ headerShown: false }}>
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.greyDarker,
        }}
      />
      <BottomNav.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.greyDarker,
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="person" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.greyDarker,
        }}
      />
    </BottomNav.Navigator>
  );
};

export default MainApp;
