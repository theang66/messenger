import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const offset = 24;
const styles = StyleSheet.create({
  textbox: {
    position: 'absolute',
    bottom: 10,
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
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TextInput
          placeholder="Enter message"
          style={styles.textbox}
        />
      </View>
    );
  }
}

export default ChatScreen;
