import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import styles from './styles';

const Config = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <LinearGradient style={styles.background} colors={['#12CBC4', '#0652DD']}>
      <StatusBar translucent={false} barStyle="light-content" />
      <View style={styles.content}>
        { children }
      </View>
    </LinearGradient>
  </SafeAreaView>
);

Config.propTypes = {
  children: PropTypes.any,
};

export default Config;
