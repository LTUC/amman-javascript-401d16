let initialState = {
    candidates: [
        { name: "shihab", votes: 0 },
        { name: "alaa", votes: 0 },
        { name: "laith", votes: 0 },
        { name: "nour", votes: 0 },
    ],
}
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            let newCandidates = state.candidates.map((candidate) => {
                if (candidate.name === payload) {
                    return {
                        name: candidate.name,
                        votes: candidate.votes + 1
                    }
                }
                else {
                    return candidate;
                }
            });
            return {
                candidates: newCandidates
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
