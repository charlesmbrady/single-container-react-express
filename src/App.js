import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';
import axios from 'axios';

function App() {
  const check = () => {
    API.getCheck().then(res => {
      if(res) {
        console.log("success! " + res.data)
      }
    })
  }

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
          Deploy to AWSs
        </a>
        <button onClick={() => check()}>Check</button>
      </header>
    </div>
  );
}

export default App;
