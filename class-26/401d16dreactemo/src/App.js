import React from "react";
import Content from './Components/Content'
class App extends React.Component {
    changeTitle = (myTitle) => {
        document.title = myTitle;
    }
    render() {
        return (
            <>
                <h1>hello </h1>
                <p>welcome to our application</p>
                <Content username="mohmad aljamal" age="26" changeTitle={this.changeTitle} />
                <Content username="shihab" age="37" changeTitle={this.changeTitle} />
                <Content username="mohannad" age="23" changeTitle={this.changeTitle} />
            </>
        )
    }
}

export default App;
// function App() {
//     return (
//         <>
//             <h1>hello </h1>
//             <p>welcome to our application</p>
//             <Content username="mohmad aljamal" age="26" />
//             <Content username="shihab" age="37" />
//             <Content username="mohannad" age="23" />
//         </>
//     )
// }
// export default App;
