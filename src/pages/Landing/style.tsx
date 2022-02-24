/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TopBackground from '../../assets/topbg.svg'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      width: '100%',
      height: '100vh',
      background: '#06070a',
      backgroundImage: 'url(' + TopBackground + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    container: {
      maxWidth: 1160,
      margin: '0px auto',
      padding: 30,
    },
    bar: {
      background: 'transparent',
      padding: 8,
    },
    appBar: {
      maxWidth: 1336,
      margin: '0px auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      hegiht: 72,
      padding: '0px 12px',
      width: '100%',
    },
    logo: {
      height: 40,
    },
    button: {
      background: '#2f8af5',
      padding: '8px 12px 8px 20px',
      borderRadius: 12,
      fontSize: 16,
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 500,
      alignItems: 'center',
      '&:hover': {
        background: '#4399ff',
      },
    },
    text2: {
      fontSize: 16,
      color: '#fff',
      opacity: 0.6,
      lineHeight: '26px',
      fontWeight: 400,
      marginBottom: 24,
      padding: 0,
    },
    button2: {
      background: '#2f8af5',
      padding: '16px 18px 16px 24px',
      borderRadius: 16,
      fontSize: 16,
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 500,
      alignItems: 'center',
      '&:hover': {
        background: '#4399ff',
      },
    },
    text: {
      marginBottom: 48,
      fontSize: 16,
      color: '#fff',
      opacity: 0.6,
      fontWeight: 300,
      '@media (max-width:1024px)': {
        fontSize: 16,
        fontWeight: 300,
        lineHeight: '26px',
      },
    },
    title2: {
      fontSize: 54,
      color: '#fff',
      fontWeight: 900,
      marginBottom: 24,
      lineHeight: '64px',
      marginTop: '40px',
    },
    icon: {
      verticalAlign: 'middle',
    },
    div1: {
      padding: 16,
      alignSelf: 'center',
    },
    div2: {
      padding: 16,
      alignSelf: 'center',
    },
    image: {
      width: '100%',
    },
    title: {
      marginBottom: 20,
      fontSize: 88,
      color: '#fff',
      fontWeight: 600,
      '@media (max-width:1024px)': {
        fontSize: 36,
        fontWeight: 600,
      },
    },
    lgText: {
      fontSize: 48,
      color: '#fff',
      lineHeight: '56px',
      fontWeight: 600,
      marginBottom: 16,
    },
    smText: {
      fontSize: 16,
      color: '#fff',
      opacity: 0.6,
      lineHeight: '26px',
      fontWeight: 300,
      marginBottom: 16,
    },
    totalValue: {
      padding: '64px 56px',
      minHeight: 'fit-content',
      borderRadius: 50,
      border: '1px solid #262626',
    },
  }),
)
