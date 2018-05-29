import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Message from './Message';

class Log extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const messages = this.props.messages;

    const messageComponents = messages.map((message) => {
      return (
        <li key={message.timeStamp}>
          <Message
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
          />
        </li>
      );
    });

    return(
      <ul>
        {messageComponents}
      </ul>
    );
  }
}

export default Log;
