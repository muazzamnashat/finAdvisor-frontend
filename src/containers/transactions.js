import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionsTable from '../components/transaction'

class Transactions extends Component {
    render(){ 
        return (
            <div>
                <TransactionsTable transactions={this.props.transactions}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {transactions: state.transactions}
}

export default connect(mapStateToProps)(Transactions)