import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { RootStackProps } from '../../navigation';
import AppButton from '../../components/AppButton';

export function Home({ navigation }: RootStackProps<'Home'>) {
  const startQuiz = () => navigation.replace('Quiz');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Trivia Challenge!</Text>
      <Text style={styles.normalText}>
        You will be presented with 10 True or False questions. Swipe the card to
        the right if your answer is True and Swipe the card to the left if your
        answer is False
      </Text>
      <Text style={styles.normalText}>Can you score 100%?</Text>
      <AppButton title="Begin" onPress={startQuiz} />
    </View>
  );
}

export default Home;
