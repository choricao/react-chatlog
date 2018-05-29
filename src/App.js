import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Log from './components/Log'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <Log messages={chatMessages} />
        </main>
      </div>
    );
  }
}

export default App;
