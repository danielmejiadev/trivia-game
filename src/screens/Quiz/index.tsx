import React, { useCallback } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import styles from './styles';

// Components
import QuestionCard from '../../components/QuestionCard';
import AnimatedCard from '../../components/AnimatedCard';
import Results from '../../components/Results';

// Hooks
import { States } from '../../hooks/useFetch';
import { useTrivia } from '../../hooks/useTrivia';

// Navigation
import { RootStackProps } from '../../navigation';

export function Quiz({ navigation: { replace } }: RootStackProps<'Quiz'>) {
  const goToHome = useCallback(() => replace('Home'), [replace]);
  const {
    currentIndex,
    currentQuestion,
    questions,
    totalQuestion,
    questionAnswered,
    state
  } = useTrivia();

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
      <Results
        questions={questions}
        total={totalQuestion}
        onPlayAgain={goToHome}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {questions
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
            bgColor="#c9e9e7"
          />
        </AnimatedCard>
      </View>
    </View>
  );
}

export default Quiz;
