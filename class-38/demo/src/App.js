import { connect } from "react-redux";
import { getRemoteData } from "./store/actions";
const App = (props) => {
    return (
        <>
            <button onClick={() => props.getRemoteData()} >Get List</button>
            <section>
                {
                    props.myList.map((item, idx) => {
                        return (

                            <div key={idx}>
                                email: <h3>{item.email}</h3>
                                address: <h3>{item.address.city}</h3>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

const mapStateToProps = (state) => ({
    myList: state.dataFromApi
})

const mapDispatchToProps = { getRemoteData };
// const mapDispatchToProps = (dispatch) => ({
//     getRemoteData: () => dispatch(getRemoteData())
// })


export default connect(mapStateToProps, mapDispatchToProps)(App);