import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from '../components/About'
import App from '../components/App'
import Intro from '../components/Intro'
import Navigation from '../components/Navigation'
import NotFound from '../components/NotFound'

export class ToshRouter extends Component {
    render() {
        const renderRoot = (props) => (
            <div>
                <Navigation />
                <App {...this.props} />
            </div>
        )

        return (
            <Router>
                <Switch>
                    {/* Root Route */}
                    <Route exact path="/" render={renderRoot} />

                    {/* Explicit Routes */}
                    <Route path="/about" component={About} />
                    <Route path="/intro" component={Intro} />

                    {/* Catch All Route */}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default ToshRouter
