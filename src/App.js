import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import NavTabs from './components/NavTabs';
import './App.css';
import AppBar from 'react-toolbox/lib/app_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button primary raised label='Click me' />
        </p>
      </div>
    );
  }
}

export default App;
