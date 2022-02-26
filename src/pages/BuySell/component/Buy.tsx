import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core'
import { useStyles, BootstrapInput } from '../Style'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'

const Currencies = ['USD', 'EUR', 'GBP']

const Coins = ['USDT', 'EHT', 'BNB']

function Buy() {
  const classes = useStyles()
  const [currency, setCurrency] = useState()
  const handleCurrencyChange = () => {}

  return (
    <Grid container justifyContent="space-around">
      <Grid item xs={4} className={classes.container}>
        <Typography className={classes.title}>Buy</Typography>
        <div>
          <Typography className={classes.text1}>From</Typography>
          <div className={classes.tradeFrom}>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={currency}
              onChange={handleCurrencyChange}
              input={<BootstrapInput placeholder="1213" />}
              defaultValue="USD"
            >
              {Currencies.map((item: any, key: any) => (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <input className={classes.input} placeholder="0.0" />
          </div>
        </div>

        <div className={classes.tradeIconDiv}>
          <ExpandMoreRoundedIcon className={classes.tradeIcon} />
        </div>

        <div>
          <Typography className={classes.text1}>To</Typography>
          <div className={classes.tradeFrom}>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={currency}
              onChange={handleCurrencyChange}
              input={<BootstrapInput placeholder="1213" />}
              defaultValue="USDT"
            >
              {Coins.map((item: any, key: any) => (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <input className={classes.input} placeholder="0.0" />
          </div>
        </div>

        <button className={classes.buyBtn}>Buy</button>
      </Grid>
      <Grid item xs={4} className={classes.container}>
        <Typography className={classes.title}>Sell</Typography>

        <div>
          <Typography className={classes.text1}>From</Typography>
          <div className={classes.tradeFrom}>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={currency}
              onChange={handleCurrencyChange}
              input={<BootstrapInput placeholder="1213" />}
              defaultValue="USDT"
            >
              {Coins.map((item: any, key: any) => (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <input className={classes.input} placeholder="0.0" />
          </div>
        </div>

        <div className={classes.tradeIconDiv}>
          <ExpandMoreRoundedIcon className={classes.tradeIcon} />
        </div>

        <div>
          <Typography className={classes.text1}>To</Typography>
          <div className={classes.tradeFrom}>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={currency}
              onChange={handleCurrencyChange}
              input={<BootstrapInput placeholder="1213" />}
              defaultValue="USD"
            >
              {Currencies.map((item: any, key: any) => (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <input className={classes.input} placeholder="0.0" />
          </div>
        </div>

        <button className={classes.sellBtn}>Sell</button>
      </Grid>
    </Grid>
  )
}

export default Buy
