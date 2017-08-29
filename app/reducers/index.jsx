'use strict';
import { combineReducers } from 'redux';

//import all sub reducers
import students from './students';
import campuses from './campuses';
import singleStudent from './singleStudent';
import newCampusEntry from './newCampusEntry';

const rootReducer = combineReducers({
  students,
  campuses,
  singleStudent,
  newCampusEntry
});


export default rootReducer;
