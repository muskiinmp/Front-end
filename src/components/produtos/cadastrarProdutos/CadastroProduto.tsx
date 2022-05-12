import { Button, Container, FormControl, FormHelperText, InputLabel, Select, MenuItem, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../model/Categoria';
import Produto from '../../../model/Produto'
import { buscaId, post, put } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

function CadastroProduto() {

    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const[categoria,setCategoria]= useState<Categoria>({
        id: 0,
        categoria: '',
        descricao: ''
    })

    const [categorias, setCategorias]= useState<Categoria[]>([])

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        quantidade: 0,
        preco: 0,
        descricao: '',
        tamanho: '',
        categoria: null
    })

    useEffect(() => {
        if (token == "") {
            toast.warn('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("product " + JSON.stringify(produto))

        if (id !== undefined) {
            console.log(produto)
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto criado com sucesso', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        back()
    }

    function back() {
        history('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Criação de Produto</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="quantidade" variant="outlined" name="quantidade" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" variant="outlined" name="preco" required margin="normal" fullWidth />
                <TextField value={produto.tamanho} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="tamanho" label="Tamanho" variant="outlined" name="tamanho" margin="normal" fullWidth />
                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" placeholder='Máximo de 100 caracteres' label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                
                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label"> Categoria </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"

                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}
                    >

                        {
                            categorias.map(item => (
                                <MenuItem value={item.id}>{item.categoria}</MenuItem>

                            ))
                        }

                    </Select>
                    <FormHelperText>Escolha uma categoria para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" >
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroProduto