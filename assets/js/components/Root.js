import React from 'react'

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

// import 'bootstrap/dist/css/bootstrap.css';

import { ToshRouter } from '../router'

export const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ToshRouter store={store} history={history} />
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default Root
