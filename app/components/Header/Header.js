import React from 'react';
import { View, TouchableOpacity, Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ navigation }) => {
  const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Choose a Scene</Text>
      <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name={`${prefix}-settings`} size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  navigation: PropTypes.object,
};

export default Header;
