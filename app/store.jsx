import { createStore, applyMiddleware } from 'redux';
import rootReducer, { gotCampusesFromServer, gotStudentsFromServer } from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

//Store
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
