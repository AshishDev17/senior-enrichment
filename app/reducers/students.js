import axios from 'axios';

//Action Types
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const ADD_STUDENT_TO_STATE = 'ADD_STUDENT_TO_STATE';
const REMOVE_STUDENT_FROM_STATE = 'REMOVE_STUDENT_FROM_STATE';
const EDIT_STUDENT_IN_STATE = 'EDIT_STUDENT_IN_STATE';

//Action Creators
export function gotStudentsFromServer(students) {
  return {
    type: GOT_STUDENTS_FROM_SERVER,
    students: students
  };
}

export function addStudentToState(student) {
  return {
    type: ADD_STUDENT_TO_STATE,
    student: student
  }
}

export function removeStudentFromState(studentId){
  return {
    type: REMOVE_STUDENT_FROM_STATE,
    studentId: studentId
  }
}

export function editStudentInState(student){
  return {
    type: EDIT_STUDENT_IN_STATE,
    student: student
  }
}

//Thunk Creators
export function fetchStudents(){
  return function thunk(dispatch){
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(gotStudentsFromServer(students)));
  };
}

export function postStudent(student, history){
  return function thunk(dispatch){
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        //console.log('got from server after posting', student);
        dispatch(addStudentToState(student));
        history.push(`/students/${student.id}`);
      })
  }
}

export function deleteStudent(studentId){
  return function thunk(dispatch){
    return axios.delete(`/api/students/${studentId}`)
      .then(() => {
        dispatch(removeStudentFromState(studentId));
      });
  }
}

export function editStudent(id, student, history){
  return function thunk(dispatch) {
    return axios.put(`/api/students/${id}`, student)
      .then(res => res.data)
      .then(student => {
        console.log('student after updated', student);
        dispatch(editStudentInState(student));
        history.push(`/students/${student.id}`);
      });
  }
}

//Reducers
export default function reducer(state, action) {

  switch(action.type){

    case GOT_STUDENTS_FROM_SERVER:
      return action.students;
    case ADD_STUDENT_TO_STATE:
      return [...state, action.student];
    case REMOVE_STUDENT_FROM_STATE:
      return state.filter(student => student.id !== +action.studentId);
    case EDIT_STUDENT_IN_STATE:
      return state.map(student => student.id === action.student.id ? action.student : student);
    default:
      return state || [];
  }
}
