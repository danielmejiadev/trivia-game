import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

// Navigation
import Navigation from './src/navigation';

// Theme
import { theme } from './src/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.main}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});

export default App;
