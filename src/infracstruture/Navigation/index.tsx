import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppContext } from '../context/AuthContext';
import AuthNav from './AuthNav';
import MainApp from './MainApp';

const Navigation = (): React.ReactElement => {
  const { isLoggedIn } = React.useContext(AppContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainApp /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default Navigation;
