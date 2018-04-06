import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { List } from '../components/List';

const Settings = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar translucent={false} barStyle="default" />
    <LinearGradient style={styles.background} colors={['#12CBC4', '#0652DD']}>
      <List navigation={navigation} />
    </LinearGradient>
  </SafeAreaView>
);

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryBG',
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});

Settings.propTypes = {
  navigation: PropTypes.object,
};

export default Settings;
