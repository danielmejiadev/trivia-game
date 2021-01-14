import React, { useState, useCallback } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import styles from './styles';

// Components
import QuestionCard from '../../components/QuestionCard';
import AnimatedCard from '../../components/AnimatedCard';
import Results from '../../components/Results';

// Hooks
import { useFetch, States } from '../../hooks/useFetch';

// Interfaces
import { Questions } from '../../interfaces/Questions';

const QUIZ_BASE_URL =
  'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export function Quiz() {
  const [data, state] = useFetch<Questions>(QUIZ_BASE_URL);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const questions = data?.results;
  const currentQuestion = questions!?.[currentIndex];
  const totalQuestion = questions!?.length;
  const questionAnswered = useCallback(
    (x) => {
      const { correct_answer: correctAnswer } = currentQuestion;
      if (JSON.parse(correctAnswer.toLowerCase()) === x > 0) {
        setCorrect((prev) => prev + 1);
      }
      setCurrentIndex((prev) => prev + 1);
    },
    [currentQuestion]
  );

  if ([States.LOADING, States.IDLE].includes(state)) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#74BCB8" />
        <Text>Loading</Text>
      </View>
    );
  }

  if (currentIndex >= totalQuestion) {
    return (
      <Results correct={correct} questions={questions!} total={totalQuestion} />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {questions!
          .filter((_, index) => index > currentIndex)
          .reverse()
          .map(({ category, question }, index) => (
            <QuestionCard
              key={question}
              title={category}
              question={question}
              total={totalQuestion}
              current={totalQuestion - index}
            />
          ))}
        <AnimatedCard onSnap={questionAnswered}>
          <QuestionCard
            title={currentQuestion.category}
            question={currentQuestion.question}
            total={totalQuestion}
            current={currentIndex + 1}
          />
        </AnimatedCard>
      </View>
    </View>
  );
}

export default Quiz;
