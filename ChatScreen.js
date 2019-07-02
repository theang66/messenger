import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Firebase from './Firebase';

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

  // Get messages and add to current messages
  componentDidMount() {
    Firebase.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  // Unsubscribe from the database when component leaves
  componentWillUnmount() {
    Firebase.shared.off();
  }

  state = {
    messages: [],
  };

  // Return name and UID for GiftedChat to parse
  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Firebase.shared.uid,
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Firebase.share.send}
        user={this.user}
      />
    );
  }
}

export default ChatScreen;
