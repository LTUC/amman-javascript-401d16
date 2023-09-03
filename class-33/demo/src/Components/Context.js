import superagent from 'superagent';
import base64 from 'base-64';
// import jwt from 'jsonwebtoken';

import jwt_decode from "jwt-decode";

import React, { useEffect, useState } from "react";
export const LoginContext = React.createContext();
import cookie from 'react-cookies';
const API = `https://midproject.onrender.com`

export default function LoginProvider(props) {
    const [loginStatus, setLoginStatus] = useState(false);
    // const [user, setUser] = useState({});

    const [user, setUser] = useState({
        user:
            { username: cookie.load('username') || '', capabilities: cookie.load('capabilities') || [] }
        , token: ''
    });


    const loginFunction = async (username, password) => {
        try {
            console.log('********')
            const response = await superagent
                .post(`${API}/signin`)
                .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`)
            console.log("body>>>>>", response.body)
            validateMyUser(response.body);
        } catch (err) {
            console.log('///////')
        }
    }
    const logoutFunction = () => {
        setLoginStatus(false);
        setUser({})
        // cookie.remove('token');
        // cookie.remove('username');
        cookie.remove('capabilities');

    }
    const validateMyUser = (user) => {
        if (user.token) {
            console.log('user', user.token)
            // const userFromToken = jwt.decode(user.token);
            const userFromToken = jwt_decode(user.token);

            console.log('user >>>>> ', userFromToken);
            setLoginStatus(true);
            // setUser(user);
            setUser(userFromToken);

            cookie.save('username', user.user.username);
            cookie.save('capabilities', user.user.capabilities);
            cookie.save('token', user.token);
        } else {
            setLoginStatus(false);
            setUser({})
        }
    }
    useEffect(() => {
        const myToken = cookie.load('token');
        if (myToken) {
            // const userToken = jwt.decode(myToken)

            setLoginStatus(true);
            // setUser(user)
        } else {
            setLoginStatus(false);
            // setUser({});
        }
    }, [])
    const can = (action) => {
        // if (user.user.capabilities.includes(action)) {
        //     return true;
        // }
        // else { return false }

        return user?.user?.capabilities?.includes(action)

    }
    const state = {
        loginStatus: loginStatus,
        user: user,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        can: can
    }
    return (
        <LoginContext.Provider value={state} >
            {props.children}
        </LoginContext.Provider>
    )
}