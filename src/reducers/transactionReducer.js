function transactionReducer (state = [], action ) {
    switch (action.type) {

    case 'START_ADDING_TRANSACTIONS_REQUEST':
    return state

    case 'ADD_TRANSACTIONS':
        return [...state, action.payload]

    default:
        return state
    }
}

export default transactionReducer;
