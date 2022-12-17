import React from 'react';
import { StatusBar } from 'react-native';
import AppContextProvider from './infracstruture/context/AuthContext';
import Navigation from './infracstruture/Navigation';

const App = () => {
  return (
    <AppContextProvider>
      <StatusBar />
      <Navigation />
    </AppContextProvider>
  );
};

export default App;
