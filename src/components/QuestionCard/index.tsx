import React from 'react';
import he from 'he';

import {
  Main,
  Overlay,
  Header,
  Title,
  Content,
  Question,
  CurrentLabel
} from './styles';

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
    <Main>
      <Overlay>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>
          <Question>{he.decode(question)}</Question>
          <CurrentLabel>{`${current} of ${total}`}</CurrentLabel>
        </Content>
      </Overlay>
    </Main>
  );
}

export default QuestionCard;
