import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Contacts: {screen: ContactList},
});

const App = createAppContainer(MainNavigator);

export default App;
