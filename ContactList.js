import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class ContactList extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  onPressChat = () => {
    this.props.navigation.navigate('Chat');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Contact 1" onPress={this.onPressChat} />
        <Button title="Contact 2" onPress={this.onPressChat} />
      </View>
    );
  }
}

export default ContactList;
