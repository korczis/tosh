import React, { Component } from 'react'

import { Jumbotron } from 'reactstrap'

export class App extends Component {
    render() {
        return (
            <div className={'container text-center'}>
                <Jumbotron>
                    <h2><b>Tosh</b></h2>
                    <p>Yet Another Web Application <strike>Template</strike> Framework</p>
                    <p><i>(Tosh is stupid nonsense, usually made intentionally so that no one can understand ~ wiktionary)</i></p>
                </Jumbotron>
            </div>
        );
    }
}

export default App
