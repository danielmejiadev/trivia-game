import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

// Interfaces
import { Question } from '../../interfaces/Question';

import styles from './styles';

interface ResultsProps {
  questions: Question[];
  correct: number;
  total: number;
}

export function Results({ questions, correct, total }: ResultsProps) {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>You score</Text>
        <Text style={styles.currentLabel}>{`${correct} of ${total}`}</Text>
        <View style={styles.content}>
          {questions.map(({ question }) => (
            <Text style={styles.question}>{`${question}`}</Text>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button title="PLAY AGAIN?" onPress={() => {}} />
      </View>
    </View>
  );
}

export default Results;
