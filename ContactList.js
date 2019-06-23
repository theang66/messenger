import React, { Component } from 'react';
import { Text, Button } from 'react-native';

class ContactList extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  onPressSignIn = () => {
    this.props.navigation.navigate('Chat');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <div>
        <Text>Contact 1</Text>
        <Button onPress={this.onPressSignIn} title="Contact 1" />
      </div>
    );
  }
}

export default ContactList;
