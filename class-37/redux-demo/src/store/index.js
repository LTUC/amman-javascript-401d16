import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import myCounterReducer from './Votes';
import myCandidatesReducer from './Candidates';

// import shihab from './Votes';

// import campaign from './Campaign'

let reducers = combineReducers({
    myCounterReducer: myCounterReducer,
    myCandidatesReducer: myCandidatesReducer
    // campaign:campaign
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();