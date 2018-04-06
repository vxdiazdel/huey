import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { HeaderSettings } from '../components/Header';
import { Grid } from '../components/Grid';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    headerRight: <HeaderSettings handlePress={() => navigation.navigate('Settings')} />,
  })

  render() {
    const { scenes } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient style={styles.background} colors={['#12CBC4', '#0652DD']}>
          <StatusBar translucent={false} barStyle="default" />
          <View style={styles.content}>
            <Grid data={scenes} columns={2} />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  heading: {
    paddingHorizontal: '$padding',
  },
  content: {
    flex: 1,
    paddingVertical: '$padding',
  },
});

Home.propTypes = {
  scenes: PropTypes.object,
};

const mapStateToProps = state => ({
  scenes: state.scene,
});

export default connect(mapStateToProps)(Home);
