import React from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {
    const state = {
        title: '401d16',
        twitter: 'xpsbox'
    }
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}