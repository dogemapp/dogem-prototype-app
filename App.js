import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        top: 25
        
      }}>
      <Text style={styles.titleText}>DogEm</Text>
      <Text style={styles.innerText}>This will call, text, and email someone every X minutes for up to one hour until they respond</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a phone number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter an email address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.smsInput}
        placeholder="Enter the contents of the text message and email"
        multiline
      />
      <Button
        title="Press to start"
      />
    </View>


  )
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 40
  },
  innerText: {
    color: 'red',
    maxWidth: 300
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250
  },
  smsInput: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minHeight: 75,
    width: 250,
    textAlignVertical: 'top'
  },
});


export default App;