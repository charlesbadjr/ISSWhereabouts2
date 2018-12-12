import React, { Component } from 'react';
import flatEarth from './Assets/flatEarth.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Header, Button } from 'semantic-ui-react';
import './App.css';
// import { IssPage } from './IssPage.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header className="App-header">
          <img src={ flatEarth } className="App-logo" alt="logo" />
          <h2>
            International Space Station 
          </h2>
          <div>
          
          <Link to="./IssPage">ISS Info</Link>
            <Button> 
              Launch
            </Button>  
          </div>
        </Header>
      </div>
      </Router>
    );
  }
}

export default App;
