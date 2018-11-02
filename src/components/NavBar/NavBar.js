import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { connect } from 'react-redux';
import { verifyAuth } from '../../ducks/reducers/reducer';
import { Link, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      user_img: '',
      userId: '',
      loggedIn: false,
      anchorEl: null,
    };
  }

  componentWillMount() {
    if (this.props.location.pathname !== '/') {
      axios.get('/api/user/auth').then(res => {
        if (res.status === 200) {
          this.props.verifyAuth(true);
          let user = res.data;
          this.setState({
            loggedIn: true,
            username: user.username,
            user_img: user.user_img,
            userId: user.userId,
          });
        } else {
          this.props.verifyAuth(false);
          this.setState({
            loggedIn: false,
            username: '',
            user_img: '',
            userId: '',
          })
        }
      });
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.setState({ anchorEl: null });
  }

  logOut = () => {
    this.setState({ anchorEl: null });
    axios.post('/api/user/logout').then(res => {
      console.log(res.data.message);
      this.props.verifyAuth(false);
      this.setState({
        username: '',
        user_img: '',
        userId: '',
      });
      this.props.history.push('/');
    });
  };

  handleMenu = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    if (this.state.username !== '') {
      return (
        <div>
          <AppBar className="app-bar" position="fixed" color="primary">
            <Toolbar className="nav-bar">
              <Link className="nav-link" to="/dashboard">
                <Typography variant="display2" color="inherit">
                  Hero Roller
                </Typography>
              </Link>
              <IconButton
                className="nav-profile-button"
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Avatar
                  alt={this.state.username}
                  src={this.state.user_img}
                  className="nav-profile-picture"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                  placement: 'bottom',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                  placement: 'bottom',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose} disabled={false}>
                  <Link className="menu-link" to="/user-profile">
                    My Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.logOut}>
                  Log out
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export default withRouter(
  connect(
    mapStateToProps,
    { verifyAuth },
  )(NavBar),
);
