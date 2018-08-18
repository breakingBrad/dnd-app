import React, { Component } from 'react';
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
      <div className="dashboard-container">
      Dashboard
      <div>
        <CharacterWizard/>
      </div>
      </div>
    );
  }
}
export default Dashboard;