import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RootStackProps } from '../../navigation';

export function Home({ navigation }: RootStackProps<'Home'>) {
  const startQuiz = () => navigation.navigate('Quiz');

  return (
    <View style={styles.container}>
      <Text>Welcome to the Trivia Challenge!</Text>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
      <Button title="Begin" onPress={startQuiz} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})!

export default Home;
