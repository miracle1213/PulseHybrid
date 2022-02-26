import React from 'react'
import clsx from 'clsx'
import {
  Table,
  TableContainer,
  TableRow,
  Paper,
  TableBody,
} from '@material-ui/core'
import {
  useStyles,
  StyledHead,
  StyledRow,
  StyledHeadCell,
  StyledCell,
} from '../Style'
import USDTIcon from '../../../assets/icon/usdt.png'
import USDIcon from '../../../assets/icon/dollar.png'
import GBPIcon from '../../../assets/icon/pound.png'
import EURIcon from '../../../assets/icon/euro.png'
import BNBIcon from '../../../assets/icon/bnb.png'

const TableHeader = ['Symbol', 'Address', 'Balance']
const Balances = [
  {
    icon: '../../../assets/icon/usdt.png',
    symbol: 'USD',
    address: '0x7C15DFe8aCE747A902F492719905E0CF231231a4',
    balance: '3290',
  },
  {
    icon: 'GBPIcon',
    symbol: 'GBP',
    address: '0x7C15DFe8aCE747A902F492719905E0CF237E52CC',
    balance: '2280',
  },
  {
    icon: 'EURIcon',
    symbol: 'EUR',
    address: '0x7C15DFe8aCE747A902F492719905E0CF237Ea331',
    balance: '6450',
  },
  {
    icon: 'BNBIcon',
    symbol: 'PLS',
    address: '0x7C15DFe8aCE747A902F492719905E0CF237Eff33',
    balance: '100',
  },
  {
    icon: 'USDTIcon',
    symbol: 'USDT',
    address: '0x7C15DFe8aCE747A902F492719905E0CF237E3212',
    balance: '100',
  },
]

function BalanceTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table>
        <StyledHead>
          <TableRow>
            {TableHeader.map((item: any, key: any) => (
              <StyledHeadCell key={key} className={classes.head} align="center">
                {item}
              </StyledHeadCell>
            ))}
          </TableRow>
        </StyledHead>
        <TableBody>
          {Balances.map((item: any, key: any) => (
            <StyledRow key={key}>
              <StyledCell className={classes.cell} align="center">
                <img
                  src={
                    item.symbol === 'USD'
                      ? USDIcon
                      : item.symbol === 'USDT'
                      ? USDTIcon
                      : item.symbol === 'EUR'
                      ? EURIcon
                      : item.symbol === 'GBP'
                      ? GBPIcon
                      : BNBIcon
                  }
                  className={classes.balanceIcon}
                  alt="coin"
                />
                {item.symbol}
              </StyledCell>
              <StyledCell className={classes.cell} align="center">
                {item.address}
              </StyledCell>
              <StyledCell
                className={clsx(classes.cell, classes.balanceTxt)}
                align="center"
              >
                {item.balance}
              </StyledCell>
            </StyledRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BalanceTable
