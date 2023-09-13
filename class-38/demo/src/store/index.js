import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducer";
// import thunk from 'redux-thunk';
import omariThunk from '../middlewares/omariThunk';
const reducers = combineReducers({
    dataFromApi: reducer,
})

const store = () => {
    // return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
    return createStore(reducers, composeWithDevTools(applyMiddleware(omariThunk)));
    // return createStore(reducers, applyMiddleware(omariThunk));


    // return createStore(reducers, composeWithDevTools(applyMiddleware(thunk,,,,,,)));

}
export default store();