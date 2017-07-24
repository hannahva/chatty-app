import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Message></Message>
        <ChatBar></ChatBar>
      </div>

    );
  }
}

export default App;

