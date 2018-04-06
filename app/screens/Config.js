import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { BridgeSvg } from '../components/SVG';

class Config extends Component {
    state = {};
    render() {
      return (
        <Container>
          <BridgeSvg />
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Connect To Bridge</Text>
            </TouchableOpacity>
          </View>
        </Container>
      );
    }
}

const styles = EStyleSheet.create({
  button: {
    marginTop: '2 * $margin',
    padding: '1.5 * $padding',
    borderRadius: '$borderRadius',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    color: '$textLight',
    fontSize: 16,
  },
});

export default Config;
