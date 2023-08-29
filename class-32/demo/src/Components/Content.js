import React, { useContext } from "react";

import { SettingsContext } from '../Context/Site';
import { ThemeContext } from '../Context/Theme';
export default function Content(props) {
    const site = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

    // const titleHandler = (e) => {
    //     site.setTitle(e.target.value)
    // }
    // const twitterHandler = (e) => {
    //     site.setTwitter(e.target.value);
    // }
    const submitHandler = (e) => {
        e.preventDefault();
        site.setTitle(e.target.title.value);
        site.setTwitter(e.target.twitter.value);
        e.target.reset();
    }
    return (
        <>
            <h2>content rendered via function component</h2>
            <div>
                <h3>my title is : {site.title}</h3>
                <div>
                    <a href={`http://www.twitter.com/${site.twitter}`}> @{site.twitter}</a>
                </div>
            </div>
            <form onSubmit={submitHandler}>
                <label>title</label>
                {/* <input type="text" onChange={titleHandler} placeholder="title" /> */}
                <input type="text" placeholder="title" name="title" />

                <label>twitter</label>
                {/* <input type="text" onChange={twitterHandler} placeholder="twitter" /> */}
                <input type="text" placeholder="twitter" name="twitter" />
                <input type="submit" />
            </form>
            <h2>
                Current Mode:{theme.mode}
            </h2>
        </>
    )
}

// export default class Content extends React.Component {
//     render() {
//         return (
//             <>
//                 <h2>content rendered via class component</h2>
//                 <SettingsContext.Consumer>
//                     {
//                         (siteContext) => (
//                             <>
//                                 <h3>my title is : {siteContext.title}</h3>
//                                 <div>
//                                     <a href={`http://www.twitter.com/${siteContext.twitter}`}> @{siteContext.twitter}</a>
//                                 </div>
//                             </>
//                         )
//                     }
//                 </SettingsContext.Consumer >
//                 <ThemeContext.Consumer>
//                     {
//                         (themeContext) => (
//                             <>
//                                 <h2>
//                                     Current Mode:{themeContext.mode}
//                                 </h2>
//                             </>
//                         )
//                     }
//                 </ThemeContext.Consumer>
//             </>
//         )
//     }

// }