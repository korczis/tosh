import React from 'react'

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

// import App from './App'

export const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router >
                <Switch>
                    <Route exact path="/" render={() => (<div>Match</div>)} />
                    <Route path="/123" render={() => (<div>One, Two, Three</div>)} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default Root
