import React from 'react';
import { Dimensions } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

// Styles
import {
  Wrapper,
  Buttons,
  TrueContainer,
  TrueText,
  FalseContainer,
  FalseText
} from './styles';

// Hooks
import { useAnimated } from '../../hooks/useAnimated';

const { width: windowWidth } = Dimensions.get('window');
const width = windowWidth * 0.8;

interface AnimatedCardProps {
  onSnap(position: number): void;
  children: React.ReactNode;
}

export function AnimatedCard({ children, onSnap }: AnimatedCardProps) {
  const { translateX, translateY, gestureHandler } = useAnimated({
    snapPointsX: [-windowWidth, 0, windowWidth],
    snapPointsY: [0],
    onSnap
  });

  const trueOpacity = interpolate(translateX, {
    inputRange: [0, width / 4],
    outputRange: [0, 1]
  });
  const falseOpacity = interpolate(translateX, {
    inputRange: [-width / 4, 0],
    outputRange: [1, 0]
  });

  return (
    <PanGestureHandler {...gestureHandler}>
      <Wrapper
        style={{
          transform: [{ translateY: translateY }, { translateX }]
        }}
      >
        {children}
        <Buttons>
          <TrueContainer style={[{ opacity: trueOpacity }]}>
            <TrueText>TRUE</TrueText>
          </TrueContainer>
          <FalseContainer style={[{ opacity: falseOpacity }]}>
            <FalseText>FALSE</FalseText>
          </FalseContainer>
        </Buttons>
      </Wrapper>
    </PanGestureHandler>
  );
}

export default AnimatedCard;
