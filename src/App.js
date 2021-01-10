import React, { Component } from 'react'
import {API} from './api/API'
import Transactions from './containers/transactions'
import CenteredTabs from './components/navMenu'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux'
import {fetchTransactions} from './actions/fetchTransactions'


class App extends Component {

  componentDidMount() {
    this.props.fetchTransactions()
    // console.log(this.props.transactions)
  }
  render() {
    return(
      <div>
        {/* <CenteredTabs/>
        <Transactions/> */}
        <Transactions/>

        <h1>I am app</h1>
      </div>
    )
  }
    
}



const mapStateToProps = state => {
  return {
    transactions: state.transactions
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

