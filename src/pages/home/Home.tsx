import React, { useEffect } from 'react';
import './Home.css';
import { Grid, Box, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';

function Home() {

  let history = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === "") {
      toast.warn('você precisa estar logado', {
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
  });

  return (
    <>
      <Grid container direction='row' className='caixa' justifyContent='center'>
        <Grid item className='carrosel'>
        </Grid>
        <Grid xs={12} container item direction='row' alignItems='flex-start' className='teste, caixa'>
          <Box>
            <Typography variant='h3' className='titulo'>Acabaram de chegar</Typography>
            <Typography variant='h5' className='titulo'>Novidades esperando por você</Typography>
          </Box>
        </Grid>
        <Grid container justifyContent='center'>
          <Grid xs={3} item >
            <img src="https://static.wixstatic.com/media/36ee3b_83da74e02c14400cbe9a0a204e0309f3~mv2.jpg/v1/fill/w_224,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ED5A1591_JPG.jpg" alt="" />
          </Grid>
          <Grid xs={3} item>
            <img src="https://static.wixstatic.com/media/36ee3b_63493928d6144b3a903850e0f33accc2~mv2.jpg/v1/fill/w_224,h_336,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_63493928d6144b3a903850e0f33accc2~mv2.webp" alt="" />
          </Grid>
          <Grid xs={3} item >
            <img src="https://static.wixstatic.com/media/36ee3b_cec85f364c4e498c870477e7655d4f67~mv2.jpg/v1/fill/w_224,h_336,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_cec85f364c4e498c870477e7655d4f67~mv2.webp" alt="" />
          </Grid>
          <Grid xs={2} item>
            <img src="https://static.wixstatic.com/media/36ee3b_9b81fb6937e64afcaded382bb2c5d308~mv2.jpg/v1/fill/w_224,h_336,al_c,q_85,usm_0.66_1.00_0.01/36ee3b_9b81fb6937e64afcaded382bb2c5d308~mv2.webp" alt="" />
          </Grid>

        </Grid>

      </Grid>

    </>
  )
}

export default Home