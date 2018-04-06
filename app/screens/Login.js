import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { LoginForm } from '../components/Form';

const Login = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.background} colors={['#12CBC4', '#0652DD']}>
        <StatusBar translucent={false} barStyle="light-content" />
        <LoginForm navigation={navigation} />
      </LinearGradient>
    </SafeAreaView>
  </TouchableWithoutFeedback>
);

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryBG',
    flex: 1,
    padding: '$padding',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
