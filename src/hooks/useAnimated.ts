import {
  usePanGestureHandler,
  withSpring
} from 'react-native-redash/lib/module/v1';

export interface AnimatedConfig {
  onSnap?: (position: number) => void;
  snapPointsX: number[];
  snapPointsY: number[];
}

export function useAnimated({
  onSnap,
  snapPointsX,
  snapPointsY
}: AnimatedConfig) {
  const {
    gestureHandler,
    translation,
    velocity,
    state
  } = usePanGestureHandler();
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: snapPointsX,
    config: {
      damping: 20,
      mass: 1,
      stiffness: 200,
      overshootClamping: false,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 0.5
    },
    onSnap: ([x]: number[]) => x !== 0 && onSnap?.(x)
  });
  const translateY = withSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: snapPointsY
  });

  return {
    translateY,
    translateX,
    gestureHandler
  };
}

export default useAnimated;
