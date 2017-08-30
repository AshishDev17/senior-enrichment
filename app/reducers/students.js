import axios from 'axios';

//Action Types
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const GOT_STUDENTS_FOR_SINGLE_CAMPUS = 'GOT_STUDENTS_FOR_SINGLE_CAMPUS';
const ADD_STUDENT_TO_STATE = 'ADD_STUDENT_TO_STATE';
const REMOVE_STUDENT_FROM_STATE = 'REMOVE_STUDENT_FROM_STATE';

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

//Thunk Creators
export function fetchStudents(){
  return function thunk(dispatch){
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(gotStudentsFromServer(students)));
  };
}

export function fetchStudentsForSingleCampus(campusId){
  return function thunk(dispatch){
    return axios.get(`/api/students/campus/${campusId}`)
    .then(res => res.data)
    .then(students => dispatch(gotStudentsForSingleCampus(students)));
  };
}

export function postStudent(student, history){
  return function thunk(dispatch){
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        console.log('got from server after posting', student);
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

//Reducers
export default function reducer(state, action) {

  switch(action.type){

    case GOT_STUDENTS_FROM_SERVER:
      return action.students;
    case GOT_STUDENTS_FOR_SINGLE_CAMPUS:
      return action.students;
    case ADD_STUDENT_TO_STATE:
      return [...state, action.student];
    case REMOVE_STUDENT_FROM_STATE:
      return state.filter(student => student.id !== +action.studentId);
    default:
      return state || [];
  }
}
