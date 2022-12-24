import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppContextProvider from './infracstruture/context/AuthContext';
import Navigation from './infracstruture/Navigation';
import store from './infracstruture/Redux/store';

const App = () => {
  return (
    <AppContextProvider>
      <Provider store={store}>
        <StatusBar />
        <Navigation />
      </Provider>
    </AppContextProvider>
  );
};

export default App;
