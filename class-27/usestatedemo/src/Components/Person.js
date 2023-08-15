import React, { useState } from "react";

function Person(props) {
    const [age, setAge] = useState(props.age || 36)
    const [name, setName] = useState(props.name || "shihab");
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            <h2 data-testid="name">My name is {name}</h2>
            <h3>My age is {age}</h3>

            <input data-testid="changedName" onChange={handleChange} />
        </>
    )
}

export default Person;