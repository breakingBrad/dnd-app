import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../Button/Button'
import axios from 'axios';
import { connect } from 'react-redux';
import { verifyAuth } from '../../ducks/reducers/reducer'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      user_img: '',
      userId: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  register() {
    if (this.state.username && this.state.password) {
      const newUser = {
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

  login() {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.setState({ error: false });
    axios.post('/api/user/login', user)
      .then(response => {
        let user = response.data;
        this.setState({
          username: user.username,
          user_img: user.user_img,
          userId: user.userId
        })
        this.props.verifyAuth(true);
        this.props.history.push('/dashboard');
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
          <div className="auth-input-container">
            <p>Username:</p>
            <input
              className="input" type="text" onChange={this.handleChange} name="username" value={this.state.username} placeholder="" />
            <p>Password:</p>
            <input
              className="input" type="password" onChange={this.handleChange} name="password" value={this.state.password} placeholder="" />
            <div className="auth-button-container">
              <Button
                className="auth-Button"
                color="primary"
                variant="contained"
                onClick={() => this.login()}
              >
              Login
              </Button>
              <Button
                className="auth-button"
                color="primary"
                variant="contained"
                onClick={() => this.register()}
              >
              Register
          </Button>
            </div>
          </div>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  user_img: state.user_img,
  userId: state.userId,
})

export default connect(mapStateToProps, { verifyAuth })(Auth);