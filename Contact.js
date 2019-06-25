import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class Contact extends Component {
  onPressChat = () => {
    this.props.navigation.navigate('Chat');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button onPress={this.onPressChat}>
        <Text>Anh Nguyen</Text>
      </Button>
    );
  }
}

export default Contact;
