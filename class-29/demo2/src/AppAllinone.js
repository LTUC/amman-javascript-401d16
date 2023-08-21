import React, { useReducer } from 'react';
const initialState = {
    count: 0,
    people: []
}
function PeopleReducer(state = initialState, action) {
    const { type, payload } = action;
    // const { type, payload } = action;


    // switch (action.type) {
    switch (type) {
        case 'ADD':
            const count2 = state.count + 1;
            // const people2 = [...state.people, action.payload];
            const people2 = [...state.people, payload];
            return {
                count: count2,
                people: people2,
            };

        case 'REMOVE':
            const count3 = state.count - 1;
            const people3 = state.people.filter((person) => person !== payload)
            return {
                count: count3,
                people: people3
            }
        case 'EMPTY':
            return initialState;

        default:
            return state;
    }
}
function addAction(name) {
    return {
        type: "ADD",
        payload: name,
    }
}
function removePerson(name) {
    return {
        type: 'REMOVE',
        payload: name,
    }
}
function emptyAll() {
    return {
        type: 'EMPTY'
    }
}
function App() {
    const [state, dispatch] = useReducer(PeopleReducer, initialState);
    function handleSubmit(e) {
        e.preventDefault();
        const personName = e.target.person.value;
        dispatch(addAction(personName));
        // dispatch({
        //     type: "ADD",
        //     payload: personName,
        // });

        e.target.reset();
    }
    return (
        <>
            <h1>People</h1>
            <h2>number of people {state.count}</h2>
            <form onSubmit={handleSubmit} >
                <input name="person" />
                <button>Add Person</button>
            </form>
            <button onClick={() => dispatch(emptyAll())}>Clear All</button>

            <ul>
                {
                    state.people.map((person, idx) => {
                        return (
                            <li key={idx} onClick={() => dispatch(removePerson(person))}>{person}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default App;