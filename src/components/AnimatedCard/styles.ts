import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center'
  },
  buttons: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tagContainer: {
    borderWidth: 4,
    borderRadius: 5,
    margin: 10,
    padding: 5
  },
  trueContainer: {
    borderColor: '#74BCB8'
  },
  trueLabel: {
    fontSize: 32,
    color: '#74BCB8',
    fontWeight: 'bold'
  },
  falseContainer: {
    borderColor: '#ec5288'
  },
  falseLabel: {
    fontSize: 32,
    color: '#ec5288',
    fontWeight: 'bold'
  }
});

export default styles;
