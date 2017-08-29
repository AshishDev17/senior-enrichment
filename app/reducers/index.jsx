'use strict'
import { combineReducers } from 'redux';

//import all sub reducers
import students from './students';
import campuses from './campuses';
import singleStudent from './singleStudent';

const rootReducer = combineReducers({
  students,
  campuses,
  singleStudent
});


export default rootReducer;
