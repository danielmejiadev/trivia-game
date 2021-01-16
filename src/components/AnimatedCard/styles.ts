import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Wrapper = styled(Animated.View)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Buttons = styled.View`
  position: absolute;
  bottom: 70px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TagContainer = styled(Animated.View)`
  border-width: 4px;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;

export const TrueContainer = styled(TagContainer)`
  border-color: ${({ theme: { colors } }) => colors.primary};
`;

export const TrueText = styled.Text`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 32px;
  font-weight: bold;
`;

export const FalseText = styled.Text`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: 32px;
  font-weight: bold;
`;

export const FalseContainer = styled(TagContainer)`
  border-color: ${({ theme: { colors } }) => colors.secondary};
`;
