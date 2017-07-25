import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {


  render(){
    const messages = this.props.messages.map((item, index) => {
      return <Message messages= { item } key={ item.id }/>
    });
    return (
      <main className="messages">
        { messages }
        <div className="message system">

        </div>
      </main>
    )
  }
}
export default MessageList;