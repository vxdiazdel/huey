import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
  formContainer: {
    alignSelf: 'stretch',
    marginHorizontal: '$margin',
    padding: '$padding',
  },
  textWrap: {
    alignItems: 'center',
    marginBottom: 10,
  },
  inputWrap: {
    flexDirection: 'row',
    backgroundColor: '$transparentWhite',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    borderRadius: '$borderRadius',
    alignItems: 'center',
    paddingHorizontal: '$padding',
    marginVertical: 10,
  },
  input: {
    height: '$inputHeight',
    flex: 1,
    color: '$textLight',
    borderColor: 'rgba(255, 255, 255, .5)',
    borderLeftWidth: StyleSheet.hairlineWidth,
    marginLeft: '$margin',
    paddingLeft: '$padding',
    fontSize: '$fontSize',
  },
  button: {
    height: '$inputHeight',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, .15)',
    borderRadius: '$borderRadius',
  },
  buttonText: {
    color: '$textLight',
    fontSize: '$fontSize',
  },
  errorText: {
    color: '$textLight',
    fontSize: '$fontSize',
    textAlign: 'center',
  },
});
