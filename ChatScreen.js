import React, { Component } from 'react';
import { Text } from 'react-native';

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>This is the chat screen</Text>
    );
  }
}

export default ChatScreen;
