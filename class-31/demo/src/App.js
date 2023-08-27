import React from 'react';
import Main from './Components/Main';
import Theme from './Context/Theme';
import Settings from './Context/Site';
import './App.css';
export default class App extends React.Component {

    render() {
        return (
            <>
                <Theme>
                    <Settings>
                        <Main />
                    </Settings>
                </Theme>
            </>


        )
    }
}