// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

import { routerMiddleware } from 'connected-react-router'
import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import { Root } from './components/Root'

import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import { createRootReducer } from './reducers'

export default function configureStore(preloadedState) {
    const middlewares = [
        loggerMiddleware,
        thunkMiddleware,
        routerMiddleware(history)
    ]

    const middlewareEnhancer = applyMiddleware(
        ...middlewares
    )

    const enhancers = [
        middlewareEnhancer,
        monitorReducersEnhancer
    ]

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const composedEnhancers = composeEnhancer(...enhancers)

    const rootReducer = createRootReducer(history)

    const store = createStore(
        rootReducer, // root reducer with router state
        preloadedState,
        composedEnhancers
    )

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store
}

function renderApp() {
    const history = createBrowserHistory()
    const store = configureStore()

    render(
        <Root
            history={history}
            store={store}
        />,
        document.getElementById('tosh-spa')
    )
}

renderApp()
