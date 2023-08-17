import React, { useState } from "react";
// import Counter from './Counter';
import Counter from './CounterFun'

function App() {
    const [hide, setHide] = useState(false);
    return (
        <>
            <h1>Hello Everyone</h1>

            <button onClick={() => setHide(!hide)}>
                {!hide && 'Hide Counter'}
                {hide && 'Show Counter'}
            </button >

            {!hide && <Counter />
            }
        </>
    )
}

export default App;