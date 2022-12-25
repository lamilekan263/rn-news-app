import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import AuthNav from './AuthNav';
import MainApp from './MainApp';

const Navigation = (): React.ReactElement => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainApp /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default Navigation;
