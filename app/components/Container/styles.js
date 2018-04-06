import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
