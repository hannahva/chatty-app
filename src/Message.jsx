import React, {Component} from 'react';

class Message extends Component {
  render(){
    let messageContainer = null;
    switch (this.props.messages.type) {
      case "incomingNotification":
        messageContainer =
          <div className="message system">{this.props.messages.content}</div>
        break;
      default:
      messageContainer =
        <div className="message">
          <span className="message-username" >{ this.props.messages.username}</span>
          <span className="message-content"> {this.props.messages.content}</span>
        </div>
        break;
    };
    return (
      messageContainer
    )
  }
}
export default Message;



