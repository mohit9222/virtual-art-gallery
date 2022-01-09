import React from 'react'
import './Header.css'
import logo from '../../assets/CkpLogo.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
   
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar className="a" position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img alt="logo" src={logo} height="50"/>
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    // <div className="header-container">     <div className="logo-container"> <div
    // className="logo">             <img alt="logo" src={logo} height="55"/>
    // </div>     </div>     <div className="nav-options">         <div
    // className="option">             <h4>Disclaimer</h4>         </div> <div
    // className="option">             <h4>About</h4>         </div> <div
    // className="option">             <h4>Contact Us</h4>         </div> </div>
    // </div>
    )
}

export default Header
