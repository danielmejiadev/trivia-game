import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// Screens
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type Screens = {
  Home: undefined;
  Quiz: undefined;
};

export type RootStackProps<T> = T extends keyof Screens
  ? StackScreenProps<Screens, T>
  : never;

export default Navigation;
