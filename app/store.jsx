import { createStore, applyMiddleware } from 'redux';
import rootReducer, { gotCampusesFromServer, gotStudentsFromServer, gotStudentsForSingleCampus } from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

//Thunks
export function fetchCampuses(){
  return function thunk(dispatch){
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)));
  };
}

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

//Store
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
