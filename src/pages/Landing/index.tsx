import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core'
import { useStyles } from './Style'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import HeadImage from '../../assets/prefooterimg.png'

// logo
import Logo from '../../assets/logo.png'

function Landing() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <div className={classes.appBar}>
            <img src={Logo} className={classes.logo} alt="logo" />
            <Link to="/register" className={classes.button}>
              Launch dApp <KeyboardArrowRightIcon className={classes.icon} />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={7} className={classes.div1}>
            <div className={classes.title}>Pulse Liquidity Protocol</div>
            <div className={classes.text}>
              Earn with Pulse by providing liquidity to pools and collect extra
              rewards in PLS tokens for participating in liquidity mining
              programs.
            </div>
            <Link to="/" className={classes.button2}>
              Launch dApp <KeyboardArrowRightIcon className={classes.icon} />
            </Link>
          </Grid>
          <Grid item xs={5} className={classes.div2}>
            <img src={HeadImage} alt="logo" className={classes.image} />
          </Grid>

          <Grid item xs={12} className={classes.title2}>
            Earn interest on your assets
          </Grid>
          <Grid item xs={12} className={classes.text2}>
            To earn passive income from your crypto assets, all you need to do
            is provide liquidity to Pulse pools. Liquidity providers collect
            rewards on assets locked in pools and extra yield farming rewards in
            PLS tokens.
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.totalValue}>
          <Grid item xs={3}>
            <Typography className={classes.lgText}>$53.7M+</Typography>
            <Typography className={classes.smText}>Total liquidity</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.lgText}>$6.9B+</Typography>
            <Typography className={classes.smText}>
              Total trading volume
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.lgText}>$28M+</Typography>
            <Typography className={classes.smText}>Total LP earning</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.lgText}>$89.9M+</Typography>
            <Typography className={classes.smText}>
              Pulse distributed via liquidity mining programs
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Landing
