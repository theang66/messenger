// https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c
import firebase from 'firebase';
import config from 'config';

class Firebase {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => firebase.initializeApp({
    apiKey: config.API_KEY,
    authDomain: "messenger-fe0dc.firebaseapp.com",
    databaseURL: "https://messenger-fe0dc.firebaseio.com",
    projectId: "messenger-fe0dc",
    storageBucket: "",
    messagingSenderId: "595433782152",
    appId: "1:595433782152:web:4281bc5d7d3a351b"
  });

  // Get current authentication, or sign in anonymously
  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  // Create a reference to the location where the messages will be saved
  get ref() {
    return firebase.database().ref('messages');
  }

  // Get the last 20 messages and new messages
  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  off() {
    this.ref.off();
  }

  // Parse message to send and format for GiftedChat
  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  // Get information to send messages
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);
}

Firebase.shared = new Firebase();
export default Firebase;
