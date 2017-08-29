import axios from 'axios';

//Action Types
const GOT_SINGLE_STUDENT_FROM_SERVER = 'GOT_SINGLE_STUDENT_FROM_SERVER';

//Action Creators
export function gotSingleStudentFromServer(student) {
  return {
    type: GOT_SINGLE_STUDENT_FROM_SERVER,
    student: student
  };
}

//Thunk Creators
export function fetchSingleStudentFromServer(studentId){
  return function thunk(dispatch){
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => dispatch(gotSingleStudentFromServer(student)));
  };
}

//Reducers
export default function reducer(state={}, action) {

  switch(action.type){

    case GOT_SINGLE_STUDENT_FROM_SERVER:
      return action.student;
    default:
      return state;
  }
}


