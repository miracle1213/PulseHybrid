import React, { useState } from 'react'
import { Grid, Typography, Select, MenuItem } from '@material-ui/core'
import { useStyles } from './Style'

// components
import Buy from './component/Buy'
import UniswapWidget from './component/UniswapWidget'
function Trade() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <Buy />
      </div>
      <div style={{ marginTop: 20 }}>
        <UniswapWidget />
      </div>
    </div>
  )
}

export default Trade
