import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import styles from './styles';

const GridItem = ({ handlePress, item }) => (
  <TouchableOpacity style={styles.gridItem} onPress={handlePress}>
    <LinearGradient style={styles.gridBackground} colors={item.colors} />
    <Text style={styles.gridText}>{item.name}</Text>
  </TouchableOpacity>
);

GridItem.propTypes = {
  handlePress: PropTypes.func,
  item: PropTypes.object,
};

export default GridItem;
