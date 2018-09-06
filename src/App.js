import React, { Component } from 'react';
import routes from './routes';
import './App.css'
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar/>
        <div className="app-content">
        {routes}
        </div>
      </div>
    );
  }
}

export default App;
