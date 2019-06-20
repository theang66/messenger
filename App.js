import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Text>Username</Text>
      <TextInput style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}} />
      <Text>Password</Text>
      <TextInput style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}} />
      <Button title="Sign In" />
    </View>
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
