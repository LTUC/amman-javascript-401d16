import App from "./App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
import { Provider } from "react-redux";
import store from './store/';
const root = createRoot(container); // createRoot(container!) if you use TypeScript
function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
root.render(<Main tab="home" />);