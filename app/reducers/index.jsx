import { combineReducers } from 'redux'

//Action Types
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const GOT_STUDENTS_FOR_SINGLE_CAMPUS = 'GOT_STUDENTS_FOR_SINGLE_CAMPUS';


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

export function gotStudentsForSingleCampus(students) {
  return {
    type: GOT_STUDENTS_FOR_SINGLE_CAMPUS,
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
    case GOT_STUDENTS_FOR_SINGLE_CAMPUS:
      newState.students = action.students;
      return newState;
    default: return state;
  }
};

export default rootReducer;
