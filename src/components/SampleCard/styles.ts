import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Card = styled(Animated.View)`
  height: 100px;
  width: 80px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 12px;
`;
