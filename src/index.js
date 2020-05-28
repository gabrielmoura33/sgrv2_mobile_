import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
