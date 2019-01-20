import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from '../components/App'
import About from '../components/About'
import NotFound from '../components/NotFound'

export class ToshRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Root Route */}
                    <Route exact path="/" render={(props) => <App {...this.props} />} />

                    {/* Explicit Routes */}
                    <Route path="/about" component={About} />

                    {/* Catch All Route */}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default ToshRouter
