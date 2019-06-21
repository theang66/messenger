import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Text>Username</Text>
        <TextInput style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}} />
        <Text>Password</Text>
        <TextInput style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}} />
        <Button title="Sign In" />
      </View>
    );
  }
}

export default LoginPage;
