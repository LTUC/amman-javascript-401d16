import { connect } from "react-redux";
import { increment, reset } from "../store/Votes";

const VotesCounter = (props) => {
    return (
        <>
            <section>
                <ul>
                    {/* <li>shihab - votes: 3</li>
                    <li>alaa - votes: 2</li>
                    <li>laith - votes: 1</li>
                    <li>nour - votes: 4</li> */}
                    {
                        props.myCounter.candidates.map((person, idx) => {
                            return (
                                <li key={idx} onClick={() => props.increment(person.name)} >
                                    {person.name} - {person.votes}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => props.reset()} >Reset Everything</button>
            </section>
        </>
    )
}
const mapStateToProps = (state) => ({
    myCounter: state.myCounterReducer
})
const mapDispatchToProps = { increment, reset };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);