import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';

// Styles
import { Card } from './styles';

// Hooks
import { useAnimated } from '../../hooks/useAnimated';

export function SampleCard() {
  const { translateX, translateY, gestureHandler } = useAnimated({
    snapPointsX: [0],
    snapPointsY: [0]
  });

  return (
    <PanGestureHandler {...gestureHandler}>
      <Card style={[{ transform: [{ translateX }, { translateY }] }]} />
    </PanGestureHandler>
  );
}

export default SampleCard;
