import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/WelcomeScreen';
import Welcome from './Screens/SignUpLoginScreen';

export default function App() {
  return (
    <Welcome/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
