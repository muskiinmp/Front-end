import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../service/Service';
import UsuarioLogin from '../../model/UsuarioLogin';
import img from "../../assets/login.png";

import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';





function Login() {

    let history = useNavigate()
    const dispatch = useDispatch()
    const [token, setToken] = useState('')

    const [usuarioLogin, setusuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        dataNascimento: "",
        token: ""
    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setusuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login('/usuarios/login', usuarioLogin, setToken)
            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        } catch (error) {
            toast.error('Dados do usuário inconsistentes', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }

    }



    return (

        <Grid container direction="column" justifyContent="center" alignItems="center" className="backgroundLogin">
            <div className='vl'> </div>
            <div className='vl2'></div>



            <Grid item xs={2} className='img-log' >
                <img src={img} style={{ width: "500px", height: "200px" }} />
            </Grid>


            <Box m={9} style={{ backgroundColor: '#AE988D', borderRadius: '15px', width: '500px', height: '500px' }} className='caixa-login'>

                <Box paddingX={5}>



                    <form onSubmit={onSubmit}>
                        
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'
                            style={{ fontFamily: "Jacques Francois", color: '#E4D8D4' }}>Bem-vindo(a)</Typography>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center'
                            style={{ fontFamily: "Jacques Francois", color: '#E4D8D4' }}>Insira seus dados de login:</Typography>

                        <TextField style={{ backgroundColor: '#E5E5E5', borderRadius: '15px'}}    value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth />

                        <TextField style={{ backgroundColor: '#E5E5E5', borderRadius: '15px' }} value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />



                        <Box marginTop={2} textAlign='center' className='bnt-cancelar'>
                            <Link className='text-decoration-none' to='/home'>
                                <Button style={{ fontFamily: "Jacques Francois", fontSize: "20px" }} type='submit' variant='contained' className='btn-login'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button style={{ fontFamily: "Jacques Francois", fontSize: "20px" }} type='submit' variant='contained' className='btn-login'>
                                Entrar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1} >
                            <Typography variant='subtitle1' gutterBottom
                                align='center' className='login-cad1' style={{ fontFamily: "Jacques Francois" }} >Ainda não possui conta?</Typography>
                        </Box>
                        <Link className='text-decoration-none' to='/cadastrar'>
                            <Typography variant='subtitle1' gutterBottom
                                align='center' className='login-cad2' style={{ fontFamily: "Jacques Francois", fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>

                    </Box>


                </Box>

            </Box>

        </Grid>
    );
}

export default Login