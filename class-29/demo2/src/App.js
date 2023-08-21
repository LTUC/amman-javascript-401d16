import React, { useReducer } from 'react';
// const initialState = {
//     count: 0,
//     people: []
// }
import PeopleReducer, { addAction, removePerson, emptyAll, initialState } from './reducer'
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