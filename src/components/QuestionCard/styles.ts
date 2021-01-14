import { StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');
const width = windowWidth * 0.8;
const height = width * 2;

const styles = StyleSheet.create({
  main: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    alignItems: 'center',
    height,
    width,
    padding: 20,
    borderRadius: 24,
    backgroundColor: '#C9E9E7'
  },
  header: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  question: {
    fontSize: 20,
    marginBottom: 20
  },
  currentLabel: {
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;
