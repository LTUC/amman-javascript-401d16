import React from "react";
class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h3>
                    my name is {this.props.username}
                </h3>
                <h2>
                    i'm {this.props.age} years old
                </h2>
                <button onClick={() => this.props.changeTitle(this.props.username)}>
                    change title
                </button>
            </>
        )
    }
}
export default Content;
// function Content(props) {
//     return (
//         <>
//             <h3>
//                 my name is {props.username}
//             </h3>
//             <h2>
//                 i'm {props.age} years old
//             </h2>
//         </>
//     )

// }
// export default Content;