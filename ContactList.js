import React, { Component } from 'react';
import { Text } from 'react-native';

class ContactList extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>This is the contact list</Text>
    );
  }
}

export default ContactList;
