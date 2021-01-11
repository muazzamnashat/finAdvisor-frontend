import React, { Component } from 'react'
import {API} from './api/API'
import Transactions from './containers/transactions'
import CenteredTabs from './components/navMenu'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux'
import {fetchTransactions} from './actions/fetchTransactions'
import {fetchCategories} from './actions/fetchCategories'

class App extends Component {

  componentDidMount() {
    this.props.fetchTransactions()
    this.props.fetchCategories()
    // console.log(this.props.transactions)
  }
  render() {
    return(
      <div>
        {/* <CenteredTabs/>
        <Transactions/> */}
        <Transactions/>
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
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

