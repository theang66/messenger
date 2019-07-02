import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const offset = 24;
const styles = StyleSheet.create({
  textbox: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
});

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });
  state = {
    messages: [],
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <GiftedChat
        messages={this.state.messages}
      />
    );
  }
}

export default ChatScreen;
