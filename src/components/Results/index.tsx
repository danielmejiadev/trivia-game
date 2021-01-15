import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

// Interfaces
import { Question } from '../../interfaces/Question';

import styles from './styles';

interface ResultsProps {
  questions: Question[];
  total: number;
  onPlayAgain: () => void;
}

export function Results({ questions, total, onPlayAgain }: ResultsProps) {
  const { length: totalCorrect } = questions.filter(
    ({ isCorrect }) => isCorrect
  );

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>You score</Text>
        <Text style={styles.currentLabel}>{`${totalCorrect} of ${total}`}</Text>
        <View style={styles.content}>
          {questions.map(({ isCorrect, question }) => (
            <Text key={question} style={styles.question}>{`${
              isCorrect ? '+' : '-'
            } ${question}`}</Text>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button title="PLAY AGAIN?" onPress={onPlayAgain} />
      </View>
    </View>
  );
}

export default Results;
