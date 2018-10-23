import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import { connect } from 'react-redux';
import { verifyAuth } from '../../ducks/reducers/reducer'
import Button from '../Button/Button'
import { Link, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      user_img: '',
      userId: '',
    }
  }

  componentDidMount() {
    if (this.props.location.pathname !== '/') {
      axios.get('/api/user/auth').then(res => {
        if (res.status === 200) {
          this.props.verifyAuth(true);
          let user = res.data;
          this.setState({
            username: user.username,
            user_img: user.user_img,
            userId: user.userId,
          })
        } else {
          this.props.verifyAuth(false);
        }
      })
    }
  }

  logOut() {
    axios.post('/api/user/logout').then(res => {
      console.log(res.data.message);
      this.props.verifyAuth(false);
      this.setState({
        username: '',
        user_img: '',
        userId: '',
      })
      this.props.history.push('/');
    })
  }

  render() {
    if (this.state.username !== '') {
      return (
        <div>
          <AppBar className="app-bar" position="fixed" color="primary" >
            <Toolbar className="nav-bar">
            <Link className="nav-link" to="/dashboard">
              <Typography variant="display2" color="inherit">
                Hero Roller
              </Typography>
              </Link>
              <Link to="/user-info">
                <Button
                  className="nav-Button"
                  color="primary"
                  variant="contained"
                >
                  <Typography variant="title" color="inherit">
                    User Info
                  </Typography>
                </Button>
                <br/>
              </Link>
                <Button
                  className="nav-Button"
                  color="primary"
                  variant="contained"
                  onClick={() => this.logOut()}
                >
                  <Typography variant="title" color="inherit">
                    Logout
                  </Typography>
                </Button>
              <Avatar alt={this.state.username} src={this.state.user_img} className="nav-profile-picture" />
            </Toolbar>
          </AppBar>
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  user_img: state.user_img,
  userId: state.userId,
})

export default withRouter(connect(mapStateToProps, { verifyAuth })(NavBar));