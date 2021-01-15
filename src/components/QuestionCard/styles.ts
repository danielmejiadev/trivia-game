import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: windowWidth } = Dimensions.get('window');
const width = windowWidth * 0.8;
const height = width * 1.8;

export const Main = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.View<{ bgColor: string }>`
  align-items: center;
  height: ${height}px;
  width: ${width}px;
  padding: 20px;
  border-radius: 24px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Question = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const CurrentLabel = styled.Text`
  font-size: 16px;
  text-align: center;
`;
