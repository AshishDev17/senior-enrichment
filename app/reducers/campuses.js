import axios from 'axios';

//Action Types
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const ADD_CAMPUS_TO_STATE = 'ADD_CAMPUS_TO_STATE';

//Action Creators
export function gotCampusesFromServer(campuses) {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses: campuses
  };
}

export function addCampusToState(campus){
  return {
    type: ADD_CAMPUS_TO_STATE,
    campus: campus
  }
}

//Thunk Creators
export function fetchCampuses(){
  return function thunk(dispatch){
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)));
  };
}

export function postCampus(campus) {
  return function thunk(dispatch) {
    axios.post('/api/campuses')
      .then(res => res.data)
      .then(campus => {
        dispatch(addCampusToState(campus));
      });
  }
}

//Reducers
export default function reducer(state=[], action) {

  switch(action.type){

    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    case ADD_CAMPUS_TO_STATE:
      return [...state, action.campus];
    default:
      return state;
  }
}
