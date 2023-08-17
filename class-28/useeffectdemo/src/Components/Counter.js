// import React from "react";
// export default function Counter() {
//     return (
//         <>
//             <h2>Function based Counter loaded</h2>
//             <p>number of clicks 0</p>

//         </>
//     )
// }
import React, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    increaseCount = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    componentDidMount() {
        console.log('the component mounted!!')
    }
    componentDidUpdate() {
        console.log(`you clicked ${this.state.counter} of time(s)`)
    }
    componentWillUnmount() {
        console.log('unmounted')
    }
    render() {
        return (
            <>
                <h2>class based Counter loaded</h2>
                <p>number of clicks {this.state.counter}</p>
                <button onClick={() => this.increaseCount()}>
                    click me!!
                </button>
            </>
        )
    }
}



export default Counter;