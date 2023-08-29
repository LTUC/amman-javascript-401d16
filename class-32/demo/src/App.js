import React from 'react';
import Main from './Components/Main';
import Theme from './Context/Theme';
import Settings from './Context/Site';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
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