import React from 'react';
import logo from './logo.svg';
import './App.css';
var PrettyError = require('pretty-error');

// instantiate PrettyError, which can then be used to render error objects
var pe = new PrettyError();
pe.start();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
