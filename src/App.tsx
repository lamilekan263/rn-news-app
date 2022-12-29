import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './infracstruture/Navigation';
import store from './infracstruture/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="white" />
      <Navigation />
    </Provider>
  );
};

export default App;
