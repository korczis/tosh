import React from 'react'

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { ToshRouter } from '../router'

export const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ToshRouter/>
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default Root
