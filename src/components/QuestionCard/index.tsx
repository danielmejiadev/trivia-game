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
  bgColor?: string;
}

export function QuestionCard({
  title,
  question,
  current,
  total,
  bgColor = '#74bcb8'
}: QuestionCardProps) {
  return (
    <Main>
      <Overlay bgColor={bgColor}>
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
