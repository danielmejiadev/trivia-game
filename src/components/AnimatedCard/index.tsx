import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import {
  usePanGestureHandler,
  withSpring
} from 'react-native-redash/lib/module/v1';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import styles from './styles';

const { width: windowWidth } = Dimensions.get('window');
const width = windowWidth * 0.8;

interface AnimatedCardProps {
  onSnap(position: number): void;
  children: React.ReactNode;
}

export function AnimatedCard({ children, onSnap }: AnimatedCardProps) {
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
    snapPoints: [-windowWidth, 0, windowWidth],
    config: {
      damping: 20,
      mass: 1,
      stiffness: 200,
      overshootClamping: false,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 0.5
    },
    onSnap: ([x]: number[]) => x !== 0 && onSnap(x)
  });
  const translateY = withSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [0]
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
      <Animated.View
        style={[
          styles.main,
          {
            transform: [{ translateY: translateY }, { translateX }]
          }
        ]}
      >
        {children}
        <View style={styles.buttons}>
          <Animated.View
            style={[
              styles.tagContainer,
              styles.trueContainer,
              { opacity: trueOpacity }
            ]}
          >
            <Text style={styles.trueLabel}>TRUE</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.tagContainer,
              styles.falseContainer,
              { opacity: falseOpacity }
            ]}
          >
            <Text style={styles.falseLabel}>FALSE</Text>
          </Animated.View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
}

export default AnimatedCard;
