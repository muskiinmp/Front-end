import React, { useEffect } from 'react';
import './Home.css';
import { Grid, Box, Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import CarouselComponent from '../../components/carousel/CarouselComponent';

function Home() {

  let history = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const useStyles = makeStyles({
    root: {
      maxWidth: 242,
    },
    media: {
      height: 258,
      width: 242
    },
  });
  const classes = useStyles();

  return (
    <>
      <Grid container direction='row' className='caixa' justifyContent='center'>
        <Grid item xs={12}>
          <CarouselComponent />
        </Grid>
        <Grid xs={12} container item direction='row' alignItems='flex-start' className='teste, caixa'>
          <Box>
            <Typography variant='h3' className='titulo'>Acabaram de chegar</Typography>
            <Typography variant='h5' className='titulo'>Novidades esperando por você</Typography>
          </Box>
        </Grid>
        <Grid container item className='testeGrid' justifyContent='center' alignContent='center'>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.wixstatic.com/media/36ee3b_96453415d89146de90effe2a671c30b3~mv2.jpg/v1/fill/w_373,h_559,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9874_edited_edited_edited.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nome produto
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Descrição??
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Colocar no carrinho
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.wixstatic.com/media/36ee3b_96453415d89146de90effe2a671c30b3~mv2.jpg/v1/fill/w_373,h_559,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9874_edited_edited_edited.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nome produto
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Descrição??
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Colocar no carrinho
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.wixstatic.com/media/36ee3b_96453415d89146de90effe2a671c30b3~mv2.jpg/v1/fill/w_373,h_559,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9874_edited_edited_edited.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nome produto
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Descrição??
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Colocar no carrinho
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container xs={3} item className='testeGrid'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.wixstatic.com/media/36ee3b_96453415d89146de90effe2a671c30b3~mv2.jpg/v1/fill/w_373,h_559,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9874_edited_edited_edited.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nome produto
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Descrição??
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Colocar no carrinho
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      </Grid>

    </>
  )
}
export default Home