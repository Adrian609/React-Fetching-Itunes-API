import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchAPI from './controller/FetchAPI';
import Details from './view/Details';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Fetching Itunes API Example</h1>
        </header>
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FetchAPI/>
        <Details />
   
      </div>
    );
  }
}

export default App;
