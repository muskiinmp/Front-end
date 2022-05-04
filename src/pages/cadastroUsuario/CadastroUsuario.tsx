import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../model/Usuario'
import { cadastroUsuario } from '../../service/Service'

function CadastroUsuario() {
    let history = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: '' 

    })

    const [userResult, setUserResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: '' 
    })
     
    useEffect(() => {
        if (userResult.id !== 0) {
            history("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
      
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

       
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            
            try {
                cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                alert('Usuario cadastrado com sucesso')

            
            } catch (error) {
                console.log(`Error: ${error}`)
                
                
                alert("Erro ao cadastrar o Usuário")
            }

        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.')

            setUser({ ...user, senha: "" }) 
        }
    }
    return (
        <Grid container justifyContent='center' alignItems='center' direction='row'>
            <Grid item xs={6} className='backgroundCadastro'>


            </Grid>

            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form>
                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='tituloCadastro'
                        >
                            Cadastro

                        </Typography>

                        <TextField
                            id='nome'
                            label='Nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            placeholder='Digite o seu nome'
                            required
                            fullWidth
                        >
                            Nome

                        </TextField>

                        <TextField
                            id='usuario'
                            label='Usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            placeholder='Digite um e-mail'
                            required
                            fullWidth
                        >
                            Usuario
                        </TextField>

                        <TextField
                            id='senha'
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            placeholder='Digite a senha'
                            type='password'
                            required
                            fullWidth
                        >
                            Senha
                        </TextField>

                        <TextField
                            id='confirmar senha'
                            label='Confirmar senha'
                            variant='outlined'
                            name='confirmar senha'
                            margin='normal'
                            placeholder='Confirme a senha'
                            type='password'
                            required
                            fullWidth
                        >
                            Confirmar senha

                        </TextField>

                        <TextField
                            id='data de nascimento'
                            label='Data de nascimento'
                            variant='outlined'
                            name='data de nascimento'
                            margin='normal'
                            placeholder='Digite sua data de nascimento'
                            type='date'
                            required
                            fullWidth
                        >
                            Data de nascimento
                        </TextField>
                        <Box>
                            <Button
                                type='submit'
                                variant='contained'
                            >Cadastrar</Button>
                            <Link to='/home' className='linkTexto'>

                                <Button
                                    variant='contained'

                                >Cancelar</Button>
                            </Link>
                        </Box>




                    </form>

                </Box>

            </Grid>

        </Grid>
    )
}
export default CadastroUsuario