import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const H1 = ({ text, textColor }) => <Text style={[styles.h1, { color: textColor }]}>{text}</Text>;

H1.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
};

export default H1;
