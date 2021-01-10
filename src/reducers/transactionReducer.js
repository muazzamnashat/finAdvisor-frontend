const initialState = []

function transactionReducer (state = initialState, { type, payload }) {
    switch (type) {

    case 'ADD_TRANSACTIONS':
        return { ...state, ...payload }

    default:
        return state
    }
}

export default transactionReducer;
