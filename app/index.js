import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

// import Navigator from './config/routes';
import Config from './screens/Config';
import Store from './config/Store';

EStyleSheet.build({
  $primaryBG: '#2d3436',
  $textDark: '#2a2a2a',
  $textMedium: '#444',
  $textLight: '#fff',
  $lightBG: '#fff',
  $padding: 10,
  $margin: 10,
  $borderRadius: 2,
  $transparentWhite: 'rgba(255, 255, 255, 0.1)',
  $fontSize: 16,
  $inputHeight: 50,
});

export default () => (
  <Provider store={Store}>
    <Config />
  </Provider>
);
