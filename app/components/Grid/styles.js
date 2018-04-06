import EStyleSheet from 'react-native-extended-stylesheet';

const HEIGHT = 110;

export default EStyleSheet.create({
  gridContainer: {
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '$margin',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    borderRadius: '$borderRadius',
    backgroundColor: '$lightBG',
  },
  gridBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT / 1.5,
    width: HEIGHT / 1.5,
    borderRadius: HEIGHT / 2,
    marginBottom: 5,
  },
  gridText: {
    color: '$textMedium',
  },
});
