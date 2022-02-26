/** @format */

//material-ui
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 60,
    },
    container: {
      background: '#29313a',
      borderRadius: 9,
      padding: 20,
    },
    tradeFrom: {
      border: '1px solid #1f262f',
      background: '#1f262f',
      borderRadius: 8,
      padding: 7,
      display: 'flex',
    },
    title: {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 500,
      textAlign: 'center',
      color: '#fff',
      fontFamily: '"Sora",sans-serif',
    },
    text1: {
      fontSize: 16,
      lineHeight: 2,
      fontWeight: 400,
      textAlign: 'left',
      color: '#fff',
      fontFamily: '"Sora",sans-serif',
      marginLeft: 20,
    },
    input: {
      textAlign: 'right',
      fontSize: 24,
      lineHeight: 1,
      fontWeight: 600,
      color: '#fff',
      background: 'transparent',
      border: 'none',
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
    },
    buyBtn: {
      background: '#12b886',
      border: 'none',
      color: '#fff',
      fontSize: 18,
      height: 56,
      borderRadius: 8,
      padding: '',
      width: '100%',
      marginTop: 20,
      cursor: 'pointer',
      '&:hover': {
        background: '#22d49f',
      },
    },
    sellBtn: {
      background: '#ff646d',
      border: 'none',
      color: '#fff',
      fontSize: 18,
      height: 56,
      borderRadius: 8,
      padding: '',
      width: '100%',
      marginTop: 20,
      cursor: 'pointer',
      '&:hover': {
        background: '#ff8c93',
      },
    },
    tradeIcon: {
      color: '#757575',
      fontSize: 24,
      borderRadius: '50%',
      background: '#1f262f',
      padding: 3,
    },
    tradeIconDiv: {
      width: '100%',
      textAlign: 'center',
      margin: '20px 0px 0px 0px',
    },
  }),
)

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      color: 'white',
      borderRadius: 4,
      width: '70px',
      position: 'relative',
      backgroundColor: '#29313a',
      fontSize: 16,
      border: 'none',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(
        ',',
      ),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
      '&:hover': {
        background: '#374250',
      },
    },
  }),
)(InputBase)
