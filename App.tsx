import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Navigation
import Navigation from './src/navigation';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
