import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom";
function Main() {
    return (
        <>
            <App />
        </>
    );
}
const rootEl = document.getElementById("root");
ReactDOM.render(<Main />, rootEl);