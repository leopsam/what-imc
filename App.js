import React from 'react';
import { StyleSheet, StatusBar, Pressable, Keyboard } from 'react-native';
import Form from './src/components/Form';
import Title from './src/components/Title';

export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <StatusBar
        backgroundColor="#06070f"
        barStyle='light-content'
      />
      <Title />
      <Form />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06070f',
    paddingTop: 150,
  },
});
