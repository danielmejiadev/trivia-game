import React from 'react';

// Interfaces
import { Question } from '../../interfaces/Question';

// Components
import AppButton from '../AppButton';

import {
  Main,
  Scroll,
  Content,
  Title,
  QuestionLabel,
  CurrentLabel,
  Footer
} from './styles';

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
    <Main>
      <Scroll>
        <Title>You score</Title>
        <CurrentLabel>{`${totalCorrect} of ${total}`}</CurrentLabel>
        <Content>
          {questions.map(({ isCorrect, question }) => (
            <QuestionLabel key={question}>{`${
              isCorrect ? '+' : '-'
            } ${question}`}</QuestionLabel>
          ))}
        </Content>
      </Scroll>
      <Footer>
        <AppButton title="PLAY AGAIN?" onPress={onPlayAgain} />
      </Footer>
    </Main>
  );
}

export default Results;
