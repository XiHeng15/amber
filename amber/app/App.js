import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatRoom from './components/ChatRoom';
import UserProfile from './components/UserProfile';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/chat" component={ChatRoom} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

const firebaseConfig = {
  // Your Firebase configuration goes here
};

firebase.initializeApp(firebaseConfig);

export default App;