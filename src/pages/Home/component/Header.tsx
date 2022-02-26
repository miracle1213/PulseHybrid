import React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from '../Style'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney' //usd
import EuroIcon from '@material-ui/icons/Euro' //euro
import Found from 'assets/icon/pound.png'
import PLS from 'assets/icon/logo.png'
import USDT from 'assets/icon/usdt.png'

function Header() {
  const classes = useStyles()

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item xs={2} className={clsx(classes.balanceDiv, classes.usd)}>
          <AttachMoneyIcon className={classes.usdIcon} />
          <div>
            <Typography className={classes.curName}>USD</Typography>
            <Typography className={classes.balance}>1920</Typography>
          </div>
        </Grid>
        <Grid item xs={2} className={clsx(classes.balanceDiv, classes.eur)}>
          <EuroIcon className={classes.usdIcon} />
          <div>
            <Typography className={classes.curName}>EUR</Typography>
            <Typography className={classes.balance}>1920</Typography>
          </div>
        </Grid>
        <Grid item xs={2} className={classes.balanceDiv}>
          <img src={Found} className={classes.usdIcon} alt="lg" />
          <div>
            <Typography className={classes.curName}>GBP</Typography>
            <Typography className={classes.balance}>1920</Typography>
          </div>
        </Grid>
        <Grid item xs={2} className={clsx(classes.balanceDiv, classes.usd)}>
          <img src={PLS} className={classes.usdIcon} alt="lg" />
          <div>
            <Typography className={classes.curName}>PLS</Typography>
            <Typography className={classes.balance}>1920</Typography>
          </div>
        </Grid>
        <Grid item xs={2} className={clsx(classes.balanceDiv, classes.usdt)}>
          <img src={USDT} alt="lg" className={classes.usdIcon} />
          <div>
            <Typography className={classes.curName}>USDT</Typography>
            <Typography className={classes.balance}>1920</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Header
