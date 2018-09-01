import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../Button/Button'

import axios from 'axios';
import './Auth.css'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: false,
      loginUser: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  register() {
    if (this.state.username && this.state.password) {
    const newUser= {
        username: this.state.username,
        password: this.state.password,
        user_img: `https://robohash.org/${this.state.username}`
    };
    this.setState({ error: false });
    axios.post('/api/user/register', newUser)
      .then(() => {
        this.login()
    })
    .catch(err => {
      this.setState({ error: true })
        console.warn(err);
    })
} else 
  return null;
}

  login(){
      const user = {
          username: this.state.username,
          password: this.state.password
      }
      this.setState({ error: false });
      axios.post('http://localhost:4000/api/user/login', user)
        .then(results => {
          console.log(results)
          this.props.loginUser(results.data[0]);
          this.props.history.push('./dashboard');
      })
      .catch(err => {
        this.setState({ error: true })
        console.warn(err);
      })
  }

  render() {
    return (
      <Paper className="auth-container">
      <div className="auth-header-container">
      <img src="https://www.freeiconspng.com/uploads/black-dice-d20-icon-15.png" alt="logo" className="auth-icon" />
        <h1>Hero Roller</h1>
        </div>
        <div className="auth-input-container">
          <p>Username:</p>
          <input
            className="input" type="text" onChange={this.handleChange} name="username" value={this.state.username} placeholder="" />
          <p>Password:</p>
          <input
            className="input" type="password" onChange={this.handleChange} name="password" value={this.state.password} placeholder="" />
        </div>
        <br/>
        <div className="auth-button-container">
          <Button 
          class-name="auth-Button" 
          onClick={()=>this.login()}
          >Login</Button>
          <Button 
          class-name="auth-button" 
          onClick={() => this.register()}
          >Register</Button>
        </div>
      </Paper>
    )
  }
}

export default Auth;