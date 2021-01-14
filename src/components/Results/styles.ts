import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  scroll: {
    padding: 15,
    backgroundColor: '#C9E9E7'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center'
  },
  question: {
    fontSize: 18,
    marginBottom: 20
  },
  currentLabel: {
    fontSize: 16,
    textAlign: 'center'
  },
  footer: {
    paddingVertical: 10
  }
});

export default styles;
