import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Profile.css';


class Profile extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          USER PROFILE PAGE GOES HERE
      </div>
      </div>

    );
  }
}


export default Profile;