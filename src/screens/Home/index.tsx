import React from 'react';

// Styles
import { Container, Title, Text } from './styles';

// Components
import AppButton from '../../components/AppButton';
import SampleCard from '../../components/SampleCard';

// Navigation
import { RootStackProps } from '../../navigation';

export function Home({ navigation }: RootStackProps<'Home'>) {
  const startQuiz = () => navigation.replace('Quiz');

  return (
    <Container>
      <Title>Welcome to the Trivia Challenge!</Title>
      <SampleCard />
      <Text>
        You will be presented with 10 True or False questions. Swipe the card to
        the right if your answer is True and Swipe the card to the left if your
        answer is False
      </Text>
      <Text>Can you score 100%?</Text>
      <AppButton title="Begin" onPress={startQuiz} />
    </Container>
  );
}

export default Home;
