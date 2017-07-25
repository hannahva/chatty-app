import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name : "Bob"},
      messages: [
        { id: 1,
          username : "bob",
          content: "Has anyone seen my marbles?",
        },
        { id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

  addNewMessage(text) {
    const newMessage = {
      id: Math.random(),
      username: this.state.currentUser.name,
      content: text
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
  }


  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages= { this.state.messages }></MessageList>
        <ChatBar currentUser = { this.state.currentUser } addMessage={ this.addNewMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;

