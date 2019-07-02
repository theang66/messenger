import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textbox: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
},
});

class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  onPressSignIn = () => {
    this.props.navigation.navigate('Contacts');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <Text>Username</Text>
        <TextInput style={styles.textbox} />
        <Text>Password</Text>
        <TextInput style={styles.textbox} />
        <Button onPress={this.onPressSignIn} title="Sign In" />
      </View>
    );
  }
}

export default LoginPage;
