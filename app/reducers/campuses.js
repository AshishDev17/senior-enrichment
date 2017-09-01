import axios from 'axios';

//Action Types
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const ADD_CAMPUS_TO_STATE = 'ADD_CAMPUS_TO_STATE';
const REMOVE_CAMPUS_FROM_STATE = 'REMOVE_CAMPUS_FROM_STATE';
const EDIT_CAMPUS_IN_STATE = 'EDIT_CAMPUS_IN_STATE';

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

export function removeCampusFromState(campusId){
  return {
    type: REMOVE_CAMPUS_FROM_STATE,
    campusId: campusId
  }
}

export function editCampusInState(campus){
  return {
    type: EDIT_CAMPUS_IN_STATE,
    campus: campus
  }
}

//Thunk Creators
export function fetchCampuses(){
  return function thunk(dispatch){
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)));
  };
}

export function postCampus(campus, history) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => {
        dispatch(addCampusToState(campus));
        history.push('/campuses');
      });
  }
}

export function deleteCampus(campusId){
  return function thunk(dispatch){
    return axios.delete(`/api/campuses/${campusId}`)
      .then(() => {
        dispatch(removeCampusFromState(campusId));
      });
  }
}

export function editCampus(id, campus, history){
  return function thunk(dispatch){
    return axios.put(`/api/campuses/${id}`, campus)
      .then(res => res.data)
      .then(campus => {
        dispatch(editCampusInState(campus));
        history.push('/campuses');
      });
  }
}



//Reducers
export default function reducer(state, action) {

  switch(action.type){

    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    case ADD_CAMPUS_TO_STATE:
      return [...state, action.campus];
    case REMOVE_CAMPUS_FROM_STATE:
      return state.filter(campus => campus.id !== +action.campusId);
    case EDIT_CAMPUS_IN_STATE:
      return state.map(campus => campus.id === action.campus.id ? action.campus : campus);
    default:
      return state || [];
  }
}
