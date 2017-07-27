import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Anonymous"},
      messages: []
    };

  }

  addNewMessage(text, type) {
    if(type === "user message") {
      const newUserMessage = {
        username: this.state.currentUser.name,
        content: text,
        type: type
      }
      this.socket.send(JSON.stringify(newUserMessage))
    } else {
      const newSystemMessage = {
        content: text,
        type: type
      }
      this.socket.send(JSON.stringify(newSystemMessage))
    };
  };

  addNewUser(username){
    this.setState({ currentUser: { name: username }})
  }

  componentDidMount(){
    this.socket = new WebSocket ("ws://localhost:3001");
    this.socket.onopen = ((event) => {
      console.log("connected to server", event);
      // this.socket.send("hello");
    });
    this.socket.onmessage = (event) => {
      console.log(event.data)
      const messages = this.state.messages.concat(JSON.parse(event.data));
      this.setState({ messages: messages})
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages= { this.state.messages }></MessageList>
        <ChatBar currentUser = { this.state.currentUser.name } setNewUser={this.addNewUser.bind(this)} addMessage={ this.addNewMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;

