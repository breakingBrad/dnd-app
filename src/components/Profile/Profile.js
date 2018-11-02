import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';
import axios from 'axios';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user_img: '',
      edit: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    axios.get('/api/user/auth').then(res => {
      let user = res.data;
      this.setState({
        username: user.username,
        user_img: user.user_img,
        userId: user.userId,
        loading: false,
      });
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEdit = () => {
    if (!this.state.edit) {
      this.setState({ edit: true });
    } else {
      this.setState({ edit: false });
    }
  };

  updateUser() {
    const { userId } = this.state;
    const img = { user_img: this.state.user_img}
    this.setState({ loading: true });
    axios.put(`/api/user/edit/${userId}`, img)
      .then(res => {
        let user = res.data;
        this.setState({
          username: user.username,
          user_img: user.user_img,
          userId: user.userId,
          loading: false,
          edit: false,
        });
      });
  };

  render() {
    const editImg = !this.state.edit ? (
    <div className="user-info-edit">
    <span className="user-edit-button">
      <Button variant="contained" onClick={() => this.toggleEdit()}>Edit Avatar</Button>
    </span>
    </div>
    ) : (
      <div className="user-info-edit">
      <input
        className="input" type="text" onChange={this.handleChange} name="user_img" value={this.state.user_img} placeholder="Image URL" />
      <span className="user-edit-button">
        <Button variant="contained"  color="primary" onClick={() => this.updateUser()}>Save</Button>
      </span>
      </div>
    );
    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <div className="user-info-container">
            <span className="character-view-header">
              <Link className="dash-link" to="/dashboard">
                <Button
                  className="new-char-button"
                  color="primary"
                  variant="contained"
                >
                  &larr; Back to Dashboard
                </Button>
              </Link>
            </span>
            {!this.state.loading ? (
              <div className="user-info">
                <img
                  className="profile-picture"
                  src={this.state.user_img === '' ? (require(`../../images/no_avatar.png`)) : (this.state.user_img)}
                  alt="avatar"
                />
                {editImg}
                <div className="info-fields">
                  <div>
                    <b id="bold">Username: </b>
                    {this.state.username}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
