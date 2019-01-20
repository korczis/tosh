import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { initialState as authInitialState, authReducer } from './auth'

/*
 * Initial state
 */

const initialState = {
    auth: authInitialState
}

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer
})

export default createRootReducer
