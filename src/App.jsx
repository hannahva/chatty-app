import React, {Component} from "react";
import NavBar from "./NavBar.jsx";
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Anonymous"}, //default value until username specified
      messages: [],
      clientSize: 1
    };
  }

//message objects compiled based on type
// and then sends stringified message to server
  handleNewMessage(text, type) {
    switch(type){
      case "postMessage":
        const newUserMessage = {
          username: this.state.currentUser.name,
          content: text,
          type: type
        }
        this.socket.send(JSON.stringify(newUserMessage))
        break;

      case "postNotification":
        const newSystemMessage = {
          content: text,
          type: type
        }
        this.socket.send(JSON.stringify(newSystemMessage))
        break;
      default:
        console.log("error sending message to the server")
    }
  };

  addNewUser(username){
    this.setState({ currentUser: { name: username }})
  }

  componentDidMount(){
    this.socket = new WebSocket ("ws://localhost:3001");

    this.socket.onmessage = (event) => {
      const eventObject = JSON.parse(event.data);
      switch(eventObject.type){
        //updates clientSize (displayed in navbar)
        //for each new active connection
        case "clientUpdated":
          this.setState({ clientSize: eventObject.content })
          break;
        //both cases add a message to the message list
        case "incomingNotification":
        case "incomingMessage":
          const messages = this.state.messages.concat(eventObject);
          this.setState({ messages: messages})
          break;

        default:
          console.log("unknown message type ", eventObject.type)
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar clients={ this.state.clientSize }/>
        <MessageList messages= { this.state.messages }></MessageList>
        <ChatBar
        currentUser = { this.state.currentUser.name }
        setNewUser={this.addNewUser.bind(this)}
        addMessage={ this.handleNewMessage.bind(this)}>
        </ChatBar>
      </div>
    );
  }
}

export default App;

