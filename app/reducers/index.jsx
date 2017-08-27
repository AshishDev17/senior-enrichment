import { combineReducers } from 'redux'

//Action Types
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';


//Action Creators
export function gotCampusesFromServer(campuses) {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses: campuses
  };
}

export function gotStudentsFromServer(students) {
  return {
    type: GOT_STUDENTS_FROM_SERVER,
    students: students
  };
}

//Initial State
const initialState = {
  campuses: [],
  students: []
};

//Reducer
const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      newState.campuses = action.campuses;
      return newState;
    case GOT_STUDENTS_FROM_SERVER:
      newState.students = action.students;
      return newState;
    default: return state;
  }
};

export default rootReducer;
