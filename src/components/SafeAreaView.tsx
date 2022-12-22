import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { theme } from '../infracstruture/theme';

type SafeAreaComponent = {
  children: React.ReactNode;
};

const SafeAreaComponent = ({ children }: SafeAreaComponent) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
  );
};

export default SafeAreaComponent;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 50,
    backgroundColor: theme.colors.white,
  },
});
