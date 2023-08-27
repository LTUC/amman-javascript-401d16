import React from "react";

import { SettingsContext } from '../Context/Site';
import { ThemeContext } from '../Context/Theme';

export default class Content extends React.Component {
    render() {
        return (
            <>
                <h2>content rendered via class component</h2>
                <SettingsContext.Consumer>
                    {
                        (siteContext) => (
                            <>
                                <h3>my title is : {siteContext.title}</h3>
                                <div>
                                    <a href={`http://www.twitter.com/${siteContext.twitter}`}> @{siteContext.twitter}</a>
                                </div>
                            </>
                        )
                    }
                </SettingsContext.Consumer >
                <ThemeContext.Consumer>
                    {
                        (themeContext) => (
                            <>
                                <h2>
                                    Current Mode:{themeContext.mode}
                                </h2>
                            </>
                        )
                    }
                </ThemeContext.Consumer>
            </>
        )
    }

}