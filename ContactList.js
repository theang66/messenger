import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import Contact from './Contact';

class ContactList extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  render() {
    return (
      <Contact />
    );
  }
}

export default ContactList;
