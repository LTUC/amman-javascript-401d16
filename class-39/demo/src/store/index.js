import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import peopleSlice from './people.store'
const reducer = combineReducers({
    people: peopleSlice
})
const store = configureStore({ reducer })
export default store;