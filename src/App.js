import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav/>
        <p> Home</p>
      </div>
    );
  }
}

export default App;
