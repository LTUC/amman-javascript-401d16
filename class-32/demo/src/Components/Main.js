import React, { useContext } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { ThemeContext } from '../Context/Theme';

export default function Main(props) {
    const myContext = useContext(ThemeContext);
    return (
        <div className={myContext.mode}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

// export default class Main extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         return (
//             <div className={this.context.mode}>
//                 <Header />
//                 <Content />
//                 <Footer />
//             </div>
//         )
//     }
// }