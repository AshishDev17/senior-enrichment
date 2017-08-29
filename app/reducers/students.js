import axios from 'axios';

//Action Types
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const GOT_STUDENTS_FOR_SINGLE_CAMPUS = 'GOT_STUDENTS_FOR_SINGLE_CAMPUS';

//Action Creators
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

//Thunk Creators
export function fetchStudents(){
  return function thunk(dispatch){
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(gotStudentsFromServer(students)));
  };
}

export function fetchStudentsForSingleCampus(campusId){
  return function thunk(dispatch){
    axios.get(`/api/students/campus/${campusId}`)
    .then(res => res.data)
    .then(students => dispatch(gotStudentsForSingleCampus(students)));
  };
}

//Reducers
export default function reducer(state=[], action) {

  switch(action.type){

    case GOT_STUDENTS_FROM_SERVER:
      return action.students;
    case GOT_STUDENTS_FOR_SINGLE_CAMPUS:
      return action.students;
    default:
      return state;
  }
}
