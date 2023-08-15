import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            age: 37
        }
    }
    incrementCount = () => {
        // this.state.counter += 1;
        this.setState({ counter: this.state.counter + 1 });
        console.log('counter ', this.state.counter)
    }
    render() {
        return (
            <>
                <h1>Hello Everyone</h1>
                <p>Number of Clicks {this.state.counter}</p>
                <button onClick={this.incrementCount}>Click Me</button>
            </>
        )
    }
}
export default App;