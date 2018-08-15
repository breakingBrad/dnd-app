import React, { Component } from 'react';
import './App.css';
import SelectRace from './components/CharacterWizard/SelectRace/SelectRace';

class App extends Component {
  render() {

    return (
      <div className="App">
        <br/>
        <SelectRace/>
      </div>
    );
  }
}

export default App;
