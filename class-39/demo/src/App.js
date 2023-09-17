import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/index.js';
import People from './components/People';
export default (props) => {
    return (
        <Provider store={Store}>
            <People />
        </Provider >
    )
}