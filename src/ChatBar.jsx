import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={ this.props.currentUser } onKeyDown={(event) => {
          if (event.key === 'Enter') {
            const systemMessage = `${this.props.currentUser} changed their name to ${event.target.value}`
            this.props.setNewUser(event.target.value);
            this.props.addMessage(systemMessage, "system message");
          }
        }}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={(event) => {
          if (event.key === 'Enter') {
            this.props.addMessage(event.target.value, "user message");
            event.target.value = '';
          }
        }}/>
      </footer>
    );
  }
}
export default ChatBar;



