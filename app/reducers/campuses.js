import axios from 'axios';

//Action Types
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';

//Action Creators
export function gotCampusesFromServer(campuses) {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses: campuses
  };
}

//Thunk Creators
export function fetchCampuses(){
  return function thunk(dispatch){
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)));
  };
}

//Reducers
export default function reducer(state=[], action) {

  switch(action.type){

    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    default:
      return state;
  }
}
