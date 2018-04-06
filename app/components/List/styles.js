import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  list: {},
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: '$padding',
    borderBottomColor: 'rgba(255, 255, 255, .5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    color: '$textLight',
    fontSize: 20,
  },
});
