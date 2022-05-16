import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokenReducer";
import './Navbar.css';
import img from "../../../assets/21.png";
import MenuNav from "../../menuNav/MenuNav";
import MenuNav2 from "../../menuNav2/MenuNav2";



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
    navbarComponent =
      <AppBar position="static" style={{ background: "#DA781D" }}>
        <Toolbar variant="dense">
          <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", height: "40px" }} >
            <div style={{ display: "flex", alignItems:'center', flexDirection: "row", width: "30%" }}>

              <Link to='home' className='navegacao'>
                <Box mx={1} style={{ cursor: "pointer" }} >
                  <p style={{ fontFamily: "Jacques Francois", fontSize: '20px'}} >
                    Home
                  </p>
                </Box>

              </Link>

                <Box mx={1} style={{ cursor: "pointer" }} >
                  <p style={{ fontFamily: "Jacques Francois" }} >
                    <MenuNav />
                  </p>
                </Box>

              
                <Box mx={1} style={{ cursor: "pointer" }} >
                  <p style={{ fontFamily: "Jacques Francois" }}>
                   <MenuNav2 />
                  </p>
                </Box>
              
            
            </div>

            <div>
              <img src={img} style={{ width: "200px", height: "100px", marginLeft: "-130%" }} />
            </div>


            <div style={{display: "flex", alignItems:'center', flexDirection: "row"}}>
              <Link to='/login' className='navegacao'>
                <Box mx={1} onClick={goLogout} style={{ cursor: "pointer", color: 'white', fontSize:'20px', fontFamily: "Jacques Francois" }}>
                  <p >
                    Logout
                  </p>
                </Box>
              </Link>
            </div>

          </Box>

        </Toolbar>
      </AppBar>

  } else {
    navbarComponent =
      <AppBar position="static" style={{ background: "#DA781D" }}>
        <Toolbar variant="dense">
          <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", height: "40px" }} >
            <div style={{ display: "flex", alignItems:'center', flexDirection: "row", width: "30%" }}>

              <Link to='home' className='navegacao'>
                <Box mx={1} style={{ cursor: "pointer" }} >
                  <p style={{ fontFamily: "Jacques Francois", fontSize: '20px'}} >
                    Home
                  </p>
                </Box>

              </Link>


              <Link to='/contato' className='navegacao'>
                <Box mx={1} className='cursor' >
                  <p style={{ fontFamily: "Jacques Francois", fontSize: '20px'}} >
                    Contato
                  </p>
                </Box>
              </Link>

            </div>

            <div>
              <img src={img} style={{ width: "200px", height: "100px", marginLeft: "-130%" }} />
            </div>


            <div style={{display: "flex", alignItems:'center', flexDirection: "row"}}>
              <Link to='/login' className='navegacao'>
                <Box mx={1} onClick={goLogout} style={{ cursor: "pointer", color: 'white', fontSize:'20px', fontFamily: "Jacques Francois" }}>
                  <p >
                    Login
                  </p>
                </Box>
              </Link>
            </div>

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