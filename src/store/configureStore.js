import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import studentsReducer from './../reducers/studentsReducer'

export default function configureStore() {

    let reducer = combineReducers({ students: studentsReducer });
    let store = createStore(reducer
        , applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
        ));
    return store;
}