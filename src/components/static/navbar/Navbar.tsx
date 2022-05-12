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
        <Link to = 'home' className = 'navegacao'>
        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Home
          </Typography>
        </Box>
        
        </Link>
        
        <Link to="/produtos" className = 'navegacao'>
        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
           Produto
          </Typography>
        </Box>
        </Link>
        <Link to="/categorias" className = 'navegacao'>
        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Categoria
          </Typography>
        </Box>
        </Link>
        <Link to="/criarCategoria" className = 'navegacao'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar categoria
                        </Typography>
                    </Box>
                </Link>                      
        <Link to = '/login' className = 'navegacao'>
          <Box mx={1} style={{ cursor: "pointer" }} >
            <Typography variant="h6" color="inherit" >
              Login
            </Typography>
          </Box>
        </Link>

        <Link to = 'contato' className = 'navegacao'>
        <Box mx={1} style={{ cursor: "pointer" }} >
          <Typography variant="h6" color="inherit" >
            Contato
          </Typography>
        </Box>
        </Link>
        
        <Link to = '/login' className = 'navegacao'>
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