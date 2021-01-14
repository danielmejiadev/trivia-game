import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Navigation
import Navigation from './src/navigation';

export function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});

export default App;
