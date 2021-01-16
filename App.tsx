import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
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
