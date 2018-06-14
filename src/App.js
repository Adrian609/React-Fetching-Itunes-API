import React, { Component } from 'react';
import logo from './logo.svg';
import FetchCom from './FetchCom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search For artist</h1>
        </header>
      <div role='main'>
      <div className='container'>
      <hr/>
      <div class="container">
          <FetchCom/>
      </div>
     </div>
    </div>
  </div>
    );
  }
}

export default App;
