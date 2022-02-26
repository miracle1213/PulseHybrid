import React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../Style'
// logo
import Logo from '../../assets/logo.png'

function Header() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <div className={classes.appBar}>
            <img src={Logo} className={classes.logo} alt="logo" />
            <div>
              <Link to="/main/home" className={classes.link}>
                Home
              </Link>
              <Link to="/main/buy" className={classes.link}>
                Buy/Sell
              </Link>
              <Link to="/main/finance" className={classes.link}>
                Deposit/Withdraw
              </Link>
              <Link to="/transaction" className={classes.link}>
                Transactions
              </Link>
              <Link to="/help" className={classes.link}>
                Help
              </Link>
              <Link to="/user-config" className={classes.link}>
                User Config
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
