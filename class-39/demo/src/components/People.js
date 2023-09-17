import React, { useState } from "react";
import { connect } from "react-redux";
import { add, remove, getRemoteData } from '../store/people.store';
const People = (props) => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        // let username = name;
        props.add(username);
        e.target.reset();
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            <ul>
                {
                    props.myPeople.map((person, idx) => {
                        return (
                            <li key={idx} onClick={() => props.remove(person.name)} >
                                {person.name}
                            </li>
                        )

                    })
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleChange} />
                <button type="submit">submit</button>
            </form>
            <button onClick={() => props.getRemoteData()}>Get RemoteData</button>
            {/* <button onClick={props.getRemoteData}>Get RemoteData</button> */}

        </>
    )
}
const mapStateToProps = (state) => ({
    myPeople: state.people
});
const mapDispatchToProps = { add, remove, getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(People);