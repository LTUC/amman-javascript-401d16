import React, { useState, useEffect } from "react";
export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('shihab');
    // useEffect(() => {
    //     console.log('i will be on every render');
    // });
    // useEffect(() => {
    //     console.log('**************')
    // }, [counter]);
    // useEffect(() => {
    //     console.log('//////////')
    // }, [name])
    useEffect(() => {
        console.log('&&&&&&&&')
    }, [name, counter]);
    // useEffect(() => {
    //     console.log('****')
    // }, []);
    // useEffect(() => {
    //     return () => {
    //         console.log('component unmounted');
    //     }
    // }, []);
    return (
        <>
            <h2>function based Counter loaded</h2>
            <p>number of clicks {counter}</p>
            <p>My name is {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <button onClick={() => setCounter(counter + 1)}>
                click me!!
            </button>
        </>
    )
}