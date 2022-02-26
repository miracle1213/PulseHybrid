import React from 'react'
import Header from './component/Header'
import BalanceTable from './component/BalanceTable'
function Home() {
  return (
    <>
      <div style={{ marginTop: 60 }}>
        <Header />
      </div>

      <div style={{ marginTop: 60 }}>
        <BalanceTable />
      </div>
    </>
  )
}

export default Home
