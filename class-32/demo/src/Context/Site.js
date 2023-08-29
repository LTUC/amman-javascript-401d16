import React, { useState } from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {
    const [title, setTitle] = useState('401d16');
    const [twitter, setTwitter] = useState('xpsbox');

    const state = {
        title: title,
        twitter: twitter,
        setTitle: setTitle,
        setTwitter: setTwitter
    }
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}