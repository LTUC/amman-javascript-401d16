
export const initialState = {
    count: 0,
    people: []
}
export default function PeopleReducer(state = initialState, action) {
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
export const addAction = (name) => {
    return {
        type: "ADD",
        payload: name,
    }
}
export const removePerson = (name) => {
    return {
        type: 'REMOVE',
        payload: name,
    }
}
export const emptyAll = () => {
    return {
        type: 'EMPTY'
    }
}
