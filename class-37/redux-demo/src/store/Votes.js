let initialState = {
    totalVotes: 0
}
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            let newTotalVotes = state.totalVotes + 1;
            return {
                totalVotes: newTotalVotes,
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}