import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">0hh1</h1>
          <Board />
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
