import React, { Component } from 'react';
import routes from './routes';
import './App.css'

class App extends Component {
  render() {

    return (
      <div>
        <div className="app-content">
        {routes}
        </div>
      </div>
    );
  }
}

export default App;
