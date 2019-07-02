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

  // Get messages and add to current messages
  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  // Unsubscribe from the database when component leaves
  componentWillUnmount() {
    Fire.shared.off();
  }

  state = {
    messages: [],
  };

  // Return name and UID for GiftedChat to parse
  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.share.send}
        user={this.user}
      />
    );
  }
}

export default ChatScreen;
