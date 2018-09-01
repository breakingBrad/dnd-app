import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';



class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    render(){
    return(
        <div>
        <AppBar className="app-bar" position="fixed" color="primary" >
            <Toolbar>
                <Typography variant="title" color="inherit">
                Hero Roller
                </Typography>
                {/* <IconButton className="nav-user-icon"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />
                <img
                src="https://robohash.org/admin" 
                alt="user-profile-icon" 
                />
                </IconButton> */}
            </Toolbar>
        </AppBar>
        </div>
    )
}
}

export default NavBar;