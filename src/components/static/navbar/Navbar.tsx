import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return(
  <>
  
  <AppBar position="static">
    <Toolbar variant="dense">
      <Box style={{ cursor: "pointer" }}>
        <Typography variant="h5" color="inherit" >
          MuSkin
        </Typography>

      </Box>
      <Box display='flex' justifyContent='start'>
        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Home
          </Typography>
        </Box>

        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Categoria
          </Typography>

        </Box>

        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Login
          </Typography>
        </Box>

        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Contato
          </Typography>
        </Box>
        <Link to = '/login' className = 'login'>
          <Box mx ={1} style={{ cursor: "pointer", color:'white'}}>
            <Typography variant="h6" color="inherit">
              Logout
            </Typography>
          </Box>
        </Link>
      </Box>

    </Toolbar>
  </AppBar>
  </>)
  }
  export default Navbar