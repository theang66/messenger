import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TextInput
          placeholder="Enter message"
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, alignItems: 'center'}}
        />
      </View>
    );
  }
}

export default ChatScreen;
