import { createSlice } from '@reduxjs/toolkit';
const peopleSlice = createSlice({
    name: 'people',
    initialState: [{ name: 'ahmad' }, { name: 'laith' }, { name: 'omari' }],
    reducers: {
        add(state, action) {
            let person = { name: action.payload };
            state.push(person);
        },
        remove(state, action) {
            return state.filter((person) => person.name !== action.payload)
        }
    }
})
export const getRemoteData = () => async (dispatch, state) => {
    let myresult = await fetch('https://swapi.dev/api/people');
    let peopleData = await myresult.json();
    peopleData.results.forEach((item) => dispatch(add(item.name)));
}
export const { add, remove } = peopleSlice.actions;
export default peopleSlice.reducer;