import React, { useState, useEffect } from 'react';
function People() {
    const [name, setName] = useState('');
    const [people, setPeople] = useState([]);
    const inputHandler = (e) => {
        setName(e.target.value);
    }
    const addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        // var names = ['shihab', 'malek', 'saeed'];
        // var numbers = ['1', '2'];
        // var newValues = ['a','b',...numbers,'1','1'];
        // console.log(newValues)>>>>
        // ['a','b','1', '2','1','1']
        // var newValues = [...numbers, 'a', 'b', '1', '1'];
        // console.log(newValues)>>>>
        // ['1','2','a','b','1','1']
        setPeople([...people, name]);
    }
    useEffect(() => {
        console.log("%c I RUN ON EVERY RE-RENDER", "background:#ccc; color:red");
    }, [people]);
    return (
        <>
            <h1>your name</h1>
            <h3>{name}</h3>
            <form onSubmit={addPerson}>
                <input onChange={inputHandler} />

            </form>
            <p>list of names:</p>
            {
                people.map((item, idx) => {
                    return (
                        <div key={idx}>
                            {item}
                        </div>
                    )
                })
            }
        </>
    )
}

export default People;