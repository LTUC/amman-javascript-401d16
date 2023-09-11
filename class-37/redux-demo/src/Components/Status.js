import { connect } from "react-redux";

const Status = (props) => {
    return (
        <>

            <section>
                <h2>Total Votes : {props.myCounter.totalVotes}</h2>
            </section>
        </>
    )
}
const mapStateToProps = state => ({
    myCounter: state.myCounterReducer
    // myCounter: state.shihab go to store/index line 4
})

export default connect(mapStateToProps)(Status);