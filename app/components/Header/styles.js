import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: '$padding',
  },
  headerText: {
    color: '$textLight',
    fontSize: 20,
  },
  settings: {
    paddingTop: '$padding',
    paddingRight: '$padding',
  },
});
