import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/CanvasController';
import CanvasController from "./components/CanvasController";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CanvasController/>
      </div>
    );
  }
}

export default App;
