import React, {Component} from "react";

class ChatBar extends Component {
  handleUsernameKeyDown (event){
    if (event.key === "Enter") {
      const systemMessage = `${this.props.currentUser} changed their name to ${event.target.value}`
      this.props.setNewUser(event.target.value);
      this.props.addMessage(systemMessage, "postNotification");
    }
  };

  handleMessageKeyDown (event) {
    if (event.key === "Enter") {
      this.props.addMessage(event.target.value, "postMessage");
      event.target.value = "";
    }
  };

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={ this.props.currentUser } onKeyDown={ this.handleUsernameKeyDown.bind(this) }/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={ this.handleMessageKeyDown.bind(this) }/>
      </footer>
    );
  }
}

export default ChatBar;



