import { Box, Button, FormHelperText, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../model/Usuario'
import { cadastroUsuario } from '../../service/Service'
import './CadastroUsuario.css'

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
                    <form onSubmit={cadastrar}>
                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='tituloCadastro'
                        >
                            Cadastrar

                        </Typography>

                        <TextField
                            id='nome'
                            label='Nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            placeholder='Digite no mínimo 5 caracteres'                
                            required
                            fullWidth
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        >
                            Nome

                        </TextField>

                        <TextField
                            id='usuario'
                            label='Usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            placeholder='Digite um e-mail válido'
                            required
                            fullWidth
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        >
                            Usuario
                        </TextField>

                        <TextField
                            id='senha'
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            placeholder='Digite no mínimo 8 caracteres'
                            type='password'
                            required
                            fullWidth
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        >
                            Senha
                        </TextField>

                        <TextField
                            id='confirmarSenha'
                            label='Confirmar senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            placeholder='Confirme a senha'
                            type='password'
                            required
                            fullWidth
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            
                        >
                            Confirmar senha

                        </TextField>

                        <TextField
                            id='dataNascimento'
                            label=''
                            variant='outlined'
                            name='dataNascimento'
                            margin='normal'
                            type='date'
                            required
                            fullWidth
                            value={user.dataNascimento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        >
                            Data de nascimento
                        </TextField>
                        <FormHelperText>*Campo obrigatório</FormHelperText>
                        <Box>
                            <Button
                                type='submit'
                                variant='contained'
                            >Cadastrar</Button>
                            <Link to='/login' className='linkTexto'>

                                <Button
                                    variant='contained' 
                                    className='btnCancelar'

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