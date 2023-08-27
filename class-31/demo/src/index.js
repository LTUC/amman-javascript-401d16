import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
// const rootEl = document.getElementById("root");
// // ReactDOM.render(<div>hello</div>, rootEl);
// // instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
// ReactDOM.render(<App />, rootEl);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);