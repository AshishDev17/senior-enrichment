'use strict'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


//Store
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

export * from './reducers/students';
export * from './reducers/campuses';
export * from './reducers/singleStudent';
export * from './reducers/newCampusEntry';
