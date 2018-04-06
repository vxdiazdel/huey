import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderSettings = ({ handlePress }) => {
  const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
  return (
    <TouchableOpacity style={styles.settings} onPress={handlePress}>
      <Ionicons name={`${prefix}-settings`} size={25} color="#12CBC4" />
    </TouchableOpacity>
  );
};

HeaderSettings.propTypes = {
  handlePress: PropTypes.func,
};

export default HeaderSettings;
