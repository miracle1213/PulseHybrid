/** @format */

//material-ui
import { TableRow, TableHead, TableCell } from '@material-ui/core'
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    balanceDiv: {
      background:
        'linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 100%)',
      borderRadius: 9,
      margin: '0px auto',
      padding: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    curName: {
      fontSize: 20,
      fontWeight: 500,
      color: '#fff',
      fontFamily: 'sans-serif',
    },
    balance: {
      fontSize: 24,
      fontWeight: 600,
      color: '#fff',
      fontFamily: 'sans-serif',
    },
    usd: {
      background:
        'linear-gradient( 109.6deg, #ff007a 11.2%, rgb(233 104 182) 91.1% )',
    },
    eur: {
      background:
        'radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )',
    },
    gbp: {
      background:
        'linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )',
    },
    usdt: {
      background: '#27a17c',
    },
    pls: {
      background:
        'linear-gradient( 109.6deg, #ff007a 11.2%, rgb(233 104 182) 91.1% )',
    },
    usdIcon: {
      width: 40,
      height: 40,
      color: 'white',
    },
    usdtIcon: {
      borderRadius: '50%',
      width: 30,
    },
    head: {
      fontWeight: 600,
      fontSize: 18,
      color: '#fff',
      fontFamily: 'sans-serif',
    },
    cell: {
      borderBottom: 'none',
      padding: '10px 4px',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: 18,
    },
    row: {
      padding: 16,
    },
    balanceTxt: {
      color: '#f1b30e',
    },
    balanceIcon: {
      borderRadius: '50%',
      width: 30,
      height: 30,
      verticalAlign: 'middle',
      marginRight: 20,
    },
  }),
)

export const StyledHead = withStyles((theme) => ({
  root: {
    padding: 16,
    background: '#0c0f10',
  },
}))(TableHead)

export const StyledHeadCell = withStyles((theme) => ({
  root: {
    border: 'none',
  },
}))(TableCell)

export const StyledRow = withStyles((theme) => ({
  root: {
    background: '#222629',
    borderBottom: '1px solid #292c2f',
  },
}))(TableRow)

export const StyledCell = withStyles((theme) => ({
  root: {
    padding: 20,
  },
}))(TableCell)
