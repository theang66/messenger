import React from 'react';

class ContactList extends Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <h1>This is the contact list</h1>
    );
  }
}

export default ContactList;
