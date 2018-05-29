import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Timestamp from './Timestamp';

class Message extends Component {

  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = this.props.timeStamp;

    return(
      <article>
        <p>{sender}</p>
        <p>{body}</p>
        <Timestamp
          time={timeStamp}
        />
      </article>
    );
  }
}

export default Message;
