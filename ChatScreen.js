import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textbox: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'stretch',
    borderColor: 'gray',
    width: 100,
    height: 50,
  }
});

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TextInput style={styles.textbox} />
      </View>
    );
  }
}

export default ChatScreen;
