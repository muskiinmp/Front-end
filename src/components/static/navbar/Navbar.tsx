import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokenReducer";
import './Navbar.css'

function Navbar() {

  let history = useNavigate()
  const dispatch = useDispatch()

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    history("/login")
  }
  var navbarComponent;

  if (token != "") {
    navbarComponent=
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box style={{ cursor: "pointer" }}>
          <Typography variant="h5" color="inherit" >
            MuSkin
          </Typography>

        </Box>

        <Box display='flex' justifyContent='start'>
          <Link to='home' className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Home
              </Typography>
            </Box>

          </Link>

          <Link to="/produtos" className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Produto
              </Typography>
            </Box>
          </Link>
          <Link to="/categorias" className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Categoria
              </Typography>
            </Box>
          </Link>
          <Link to="/criarCategoria" className='navegacao'>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                Cadastrar categoria
              </Typography>
            </Box>
          </Link>
          <Link to="/criarProduto" className='navegacao'>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                Cadastrar Produto
              </Typography>
            </Box>
          </Link>
          <Link to='/login' className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Login
              </Typography>
            </Box>
          </Link>

          <Link to='contato' className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Contato
              </Typography>
            </Box>
          </Link>

          <Link to='/login' className='navegacao'>
            <Box mx={1} onClick={goLogout} style={{ cursor: "pointer", color: 'white' }}>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Link>
        </Box>

      </Toolbar>
    </AppBar>

  }else{
    navbarComponent=
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box style={{ cursor: "pointer" }}>
          <Typography variant="h5" color="inherit" >
            MuSkin
          </Typography>

        </Box>

        <Box display='flex' justifyContent='start'>
          <Link to='home' className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Home
              </Typography>
            </Box>

          </Link>

          <Link to="/produtos" className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Produto
              </Typography>
            </Box>
          </Link>
          <Link to='contato' className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Contato
              </Typography>
            </Box>
          </Link>
          <Link to='/login' className='navegacao'>
            <Box mx={1} style={{ cursor: "pointer" }} >
              <Typography variant="h6" color="inherit" >
                Login
              </Typography>
            </Box>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>
  }

  return (
    <>
      {navbarComponent}

    </>)
}
export default Navbar