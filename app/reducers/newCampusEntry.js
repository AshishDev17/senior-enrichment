'use strict';

//Action Types
const WRITE_CAMPUS = 'WRITE_CAMPUS';

//Action Creators
export function writeCampus(campus){
  return {
    type: WRITE_CAMPUS,
    campus: campus
  }
}


//Reducer
export default function reducer(state={}, action){

  switch(action.type){
    case WRITE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
