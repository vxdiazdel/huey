import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.listItem}>
    {children}
  </TouchableOpacity>
);

ListItem.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.any,
};

export default ListItem;
