import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export default App
