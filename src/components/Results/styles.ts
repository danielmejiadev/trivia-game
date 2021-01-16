import styled from 'styled-components/native';

export const Main = styled.View`
  flex: 1;
  background-color: white;
`;

export const Scroll = styled.ScrollView`
  padding: 15px;
`;

export const Content = styled.View`
  margin-top: 10px;
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const QuestionContainer = styled.View<{ isCorrect: boolean }>`
  background-color: ${({ isCorrect, theme: { colors } }) =>
    isCorrect ? colors.primary : colors.secondary};
  border-radius: 12px;
  margin-bottom: 15px;
  flex-direction: row;
`;

export const Icon = styled.Text`
  font-size: 28px;
  color: white;
  margin-left: 10px;
`;

export const QuestionLabel = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: white;
  flex: 1;
`;

export const CurrentLabel = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const Footer = styled.View`
  padding: 15px;
`;
