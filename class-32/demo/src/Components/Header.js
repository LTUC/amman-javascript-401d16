import React, { useContext } from "react";
import { Navbar, Alignment, Button } from '@blueprintjs/core';
// import { SettingsContext } from '../Context/Site';
import { ThemeContext } from '../Context/Theme';
export default function Header(props) {
    const myContext = useContext(ThemeContext);

    return (

        <Navbar className={myContext.mode}>
            <Navbar.Group align={Alignment.LEFT}>
                {/* <Navbar.Heading>Title from Context {this.context.title}</Navbar.Heading> */}
                <Navbar.Divider />
                <Navbar.Heading>
                    Mode from context : {myContext.mode}
                    <Button icon="refresh" onClick={myContext.toggleMode} />
                </Navbar.Heading>
            </Navbar.Group>
        </Navbar>

    )
}
// export default class Header extends React.Component {
//     // static contextType = SettingsContext;
//     static contextType = ThemeContext;

//     render() {
//         return (
//             <header>
//                 <Navbar>
//                     <Navbar.Group align={Alignment.LEFT}>
//                         {/* <Navbar.Heading>Title from Context {this.context.title}</Navbar.Heading> */}
//                         <Navbar.Divider />
//                         <Button icon="refresh" onClick={this.context.toggleMode} />
//                     </Navbar.Group>
//                 </Navbar>
//             </header>
//         )
//     }
// }