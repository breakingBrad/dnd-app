import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import CharacterWizard from '../CharacterWizard/CharacterWizard';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className="dashboard-container">
      <div>
        <CharacterWizard/>
      </div>
      </div>
      </div>
    );
  }
}
export default Dashboard;