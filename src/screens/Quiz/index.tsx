import React, { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

// Styles
import { Container, Cards, Text } from './styles';

// Components
import QuestionCard from '../../components/QuestionCard';
import AnimatedCard from '../../components/AnimatedCard';
import Results from '../../components/Results';
import AppButton from '../../components/AppButton';

// Hooks
import { States } from '../../hooks/useFetch';
import { useTrivia } from '../../hooks/useTrivia';

// Navigation
import { RootStackProps } from '../../navigation';

export function Quiz({ navigation: { replace } }: RootStackProps<'Quiz'>) {
  const goToHome = useCallback(() => replace('Home'), [replace]);
  const { colors } = useTheme();

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
      <Container>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text>Loading</Text>
      </Container>
    );
  }

  if (States.ERROR === state) {
    return (
      <Container>
        <MaterialIcons name="error" size={96} color={colors.secondary} />
        <Text>Oops, Something went wrong!</Text>
        <AppButton title="Try Again" onPress={goToHome} />
      </Container>
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
    <Container>
      <Cards>
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
              bgColor={colors.primary}
            />
          ))}
        <AnimatedCard onSnap={questionAnswered}>
          <QuestionCard
            title={currentQuestion.category}
            question={currentQuestion.question}
            total={totalQuestion}
            current={currentIndex + 1}
            bgColor={colors.primaryLight}
          />
        </AnimatedCard>
      </Cards>
    </Container>
  );
}

export default Quiz;
