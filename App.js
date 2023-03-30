import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import React, {useState} from 'react';
import EmojiTranslator from './screens/EmojiTranslator';



export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <EmojiTranslator />
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
