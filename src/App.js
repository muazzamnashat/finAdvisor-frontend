import React, { Component } from 'react'
import {API} from './api/API'
import Transactions from './containers/transactions'
import CenteredTabs from './components/navMenu'
import Dashboard from './components/Dashboard'
export class App extends Component {
  render() 
  {{console.log(API.fetchTransactions())}
    return (
      <div>
        {/* <CenteredTabs/>
        <Transactions/> */}

        <Dashboard/>
      </div>
    )}
}

export default App

