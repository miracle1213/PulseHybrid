/** @format */
import Background from '../assets/topbg.svg'
//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      background: 'transparent',
      padding: 8,
    },
    root: {
      background: '#232a32',
      height: '100vh',
    },
    container: {
      maxWidth: 1320,
      margin: '0px auto',
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
    link: {
      fontSize: 16,
      cursor: 'pointer',
      color: 'white',
      textDecoration: 'none',
      marginRight: 26,
    },
  }),
)
