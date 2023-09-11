import { connect } from "react-redux";
import { increment, reset } from "../store/actions";
import { Button, ButtonGroup } from '@chakra-ui/react'
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
                                <li key={idx} onClick={
                                    () => props.increment(person.name)} >
                                    {person.name} - {props.totalVotes > 0 ? Math.floor((person.votes / props.totalVotes) * 100) : 0}
                                    %
                                </li>
                            )
                        })
                    }
                </ul>
                <Button onClick={() => props.reset()} >Reset Everything</Button>
            </section>
        </>
    )
}
const mapStateToProps = (state) => ({
    myCounter: state.myCandidatesReducer,
    totalVotes: state.myCounterReducer.totalVotes,
})
const mapDispatchToProps = { increment, reset };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);