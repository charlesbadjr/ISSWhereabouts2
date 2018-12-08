import React, { Component } from 'react';
import flatEarth from './Assets/flatEarth.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ flatEarth } className="App-logo" alt="logo" />
          <p>
            International Space Station 
          </p>
          <div>
            <button large > Launch
            </button >  
          </div>
        </header>
      </div>
    );
  }
}

export default App;
