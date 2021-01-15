import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import he from 'he';

import styles from './styles';

interface QuestionCardProps {
  title: string;
  question: string;
  current: number;
  total: number;
}

export function QuestionCard({
  title,
  question,
  current,
  total
}: QuestionCardProps) {
  return (
    <View style={styles.main}>
      <Animated.View style={[styles.overlay]}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.question}>{he.decode(question)}</Text>
          <Text style={styles.currentLabel}>{`${current} of ${total}`}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default QuestionCard;
