import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

// Styles
import styles from './styles';

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
