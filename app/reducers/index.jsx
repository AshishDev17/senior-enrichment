'use strict';
import { combineReducers } from 'redux';

//import all sub reducers
import students from './students';
import campuses from './campuses';

const rootReducer = combineReducers({
  students,
  campuses
});


export default rootReducer;
