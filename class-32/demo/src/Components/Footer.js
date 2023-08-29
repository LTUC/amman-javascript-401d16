import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import { ThemeContext } from '../Context/Theme';
import { SettingsContext } from '../Context/Site';
import { useContext } from 'react';

export default function Footer(props) {
    const site = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

    return (
        <>
            <Card elevation={Elevation.TWO} className={theme.mode}>
                <h3>the mode is {theme.mode}</h3>
                <h5>CopyRight 2023 {site.title}</h5>
                <p>Card content</p>
                <div>
                    <a href={`http://www.twitter.com/${site.twitter}`}> @{site.twitter}</a>
                </div>
            </Card>
        </>
    )
}