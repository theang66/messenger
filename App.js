import React, { Component } from 'react';
import LoginPage from './LoginPage';
import ContactList from './ContactList';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Contacts: {screen: ContactList},
  Chat: {screen: ChatScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
