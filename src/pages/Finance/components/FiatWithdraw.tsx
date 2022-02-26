import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import {
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Chip,
  TablePagination,
  TableRow,
  FormHelperText,
} from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'
import useStyles from '../styles'
// import { FiatType } from '../../../config/constants'
// import {
//   FiatWithdrawHistory,
//   ConfirmFiatWithdraw,
// } from '../../../hooks/finance'
// import { showAlert } from '../../../store/alert'
// import { useAppDispatch } from '../../../store/hooks'

interface MyToken {
  userId: string
}

export default function FiatDeposit(props: any) {
  const classes = useStyles()

  // const dispatch = useAppDispatch()

  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState('')
  const [quanty, setQuanty] = useState('')
  const [quantyValid, setQuantyValid] = useState('')
  const [success, setSuccess] = useState(false)
  const [searched, setSearched] = useState<string>('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [data, setData] = React.useState([])
  const [keyword, setKeyword] = React.useState('')
  const [sendData, setSendData] = React.useState('')
  const [count, setCount] = React.useState(0)

  const requestSearch: any = (searchedVal: string) => {
    setKeyword(searchedVal)
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setToken(decoded.userId)
    }
  }, [])

  // useEffect(() => {
  //   setEmail('')
  //   setQuanty('')

  //   const formData = new FormData()
  //   formData.append('user_id', token)
  //   formData.append('type', FiatType.FIAT_WITHDRAW)
  //   formData.append('keyword', sendData)
  //   formData.append('cur_page', page.toString())
  //   formData.append('per_page', rowsPerPage.toString())

  //   FiatWithdrawHistory(formData).then((res: any) => {
  //     if (res === undefined) {
  //       dispatch(
  //         showAlert({ message: 'Network connection error', severity: 'error' }),
  //       )
  //       return
  //     }

  //     setData(res.data.Data)
  //     setCount(res.data.TotalCnt)

  //     if (res.data.Success && success) {
  //       dispatch(
  //         showAlert({ message: 'Successfully withdraw', severity: 'success' }),
  //       )
  //     } else if (!success) {
  //       dispatch(showAlert({ message: 'Failed withdraw', severity: 'error' }))
  //     }
  //   })
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [success, token, sendData, page, rowsPerPage])

  const handleEmailChange = (value: any) => {
    setEmail(value)
    let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(value)) {
      setEmailValid('Entered value does not match email format.')
    } else {
      setEmailValid('')
    }
  }

  const handleQuantyChange = (value: any) => {
    setQuanty(value)
    if (value !== '') {
      setQuantyValid('')
    }
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()

    // if (email.length === 0) {
    //   setEmailValid('Please enter your email.')
    // } else if (quanty.length === 0) {
    //   setQuantyValid('Please enter your amount.')
    // } else if (emailValid === '' && quantyValid === '') {
    //   const formData = new FormData()
    //   formData.append('receiver', email)
    //   formData.append('amount', quanty)
    //   formData.append('user_id', token)

    //   ConfirmFiatWithdraw(formData).then((res: any) => {
    //     if (res === undefined) {
    //       dispatch(
    //         showAlert({
    //           message: 'Network connection error',
    //           severity: 'error',
    //         }),
    //       )
    //       return
    //     }
    //     if (!res.data.Success) {
    //       dispatch(
    //         showAlert({ message: res.data.Error.Msg, severity: 'error' }),
    //       )
    //     } else {
    //       setSuccess(true)
    //     }
    //   })
    // }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const handleSearch = () => {
    setSendData(keyword)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item sm={4} xs={12} style={{ alignSelf: 'center' }}>
            Withdraw Address:
          </Grid>
          <Grid item sm={8} xs={12}>
            <TextField
              margin="normal"
              id="email"
              label="Address"
              type="text"
              value={email}
              className={classes.textfld}
              onChange={(e) => handleEmailChange(e.target.value)}
              fullWidth
            />
            <FormHelperText className={classes.error}>
              {emailValid === '' ? '' : emailValid}
            </FormHelperText>
          </Grid>

          <Grid
            item
            sm={4}
            xs={12}
            style={{ alignSelf: 'center', marginTop: '20px' }}
          >
            Withdraw Amount(USD):
          </Grid>
          <Grid item sm={8} xs={12}>
            <TextField
              margin="normal"
              id="quanty"
              label="Enter Amount"
              type="number"
              value={quanty}
              className={classes.textfld}
              onChange={(e) => handleQuantyChange(e.target.value)}
            />
            <FormHelperText className={classes.error}>
              {quantyValid === '' ? '' : quantyValid}
            </FormHelperText>
          </Grid>
          <Grid item sm={4} xs={12}></Grid>
          <Grid item sm={8} xs={12}>
            <Button
              variant="contained"
              className={classes.draw}
              fullWidth
              style={{ marginTop: '30px' }}
              type="submit"
            >
              Withdraw Now
            </Button>
          </Grid>
        </Grid>
      </form>

      <div>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          onRequestSearch={() => handleSearch()}
          className={classes.search}
        />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className={classes.thead}>
                <TableCell className={classes.thtitle}>BatchID</TableCell>
                <TableCell className={classes.thtitle}>TxnID</TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Amount
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Confirmed
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Fee
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Currency
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Payer
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Status
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                {data &&
                  data.map((row: any, key: any) => (
                    <TableRow key={key} hover>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tbody}
                      >
                        {row.BatchId}
                      </TableCell>
                      <TableCell className={classes.tbody}>
                        {row.TransactionId}
                      </TableCell>
                      <TableCell className={classes.tbody} align="right">
                        {row.Amount}
                      </TableCell>
                      <TableCell className={classes.tbody} align="right">
                        {row.NetAmount}
                      </TableCell>
                      <TableCell className={classes.tbody} align="right">
                        {row.Fee}
                      </TableCell>
                      <TableCell className={classes.tbody} align="right">
                        {row.CurrencyCode}
                      </TableCell>
                      <TableCell className={classes.tbody}>
                        <div className={classes.tbOverflow}>{row.Payer}</div>
                      </TableCell>
                      <TableCell className={classes.tbody}>
                        {row.Status === 'SUCCESS' ? (
                          <Chip
                            size="small"
                            label="Success"
                            component="a"
                            style={{
                              backgroundColor: '#61309b',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : row.Status === 'PROCESSING' ? (
                          <Chip
                            size="small"
                            label="Processing"
                            component="a"
                            style={{
                              backgroundColor: '#1d4099',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : row.Status === 'PENDING' ? (
                          <Chip
                            size="small"
                            label="Pending"
                            component="a"
                            style={{
                              backgroundColor: '#c5ae28',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : row.Status === 'COMPLETED' ? (
                          <Chip
                            size="small"
                            label="Completed"
                            component="a"
                            style={{
                              backgroundColor: '#4aab1f',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : (
                          <Chip
                            size="small"
                            label="Failed"
                            component="a"
                            style={{
                              backgroundColor: '#c13948',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        )}
                      </TableCell>
                      <TableCell className={classes.tbody}>
                        {new Date(row.Timestamp * 1000).toLocaleString('en-GB')}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell
                    className={classes.nodata}
                    align="center"
                    colSpan={12}
                  >
                    There is no fiat withdraw data
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  )
}
