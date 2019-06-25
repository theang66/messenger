import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class ContactList extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Contact 1" onPress={() => navigate('Chat', {title: "Contact 1"})} />
        <Button title="Contact 2" onPress={() => navigate('Chat', {title: "Contact 2"})} />
      </View>
    );
  }
}

export default ContactList;
