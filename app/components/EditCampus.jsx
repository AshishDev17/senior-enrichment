'use strict';
import React, { Component } from 'react';
import {editCampus} from '../store';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function EditCampus (props) {
  const campus = props.campus;
  console.log(campus);

  if(campus){
    return (
      <div>
        <h2>EDIT CAMPUS {campus.name}</h2>
        <form onSubmit={props.handleSubmit}>
            <fieldset>
              <legend>Edit Campus</legend>
              <div>
                <label htmlFor="">Campus Name: </label>
                <input type="text" name="campusName" defaultValue={campus.name}/>
              </div>
              <div>
                <label htmlFor="">Campus Description: </label>
                <input type="text" name="campusDescription" defaultValue={campus.description}/>
              </div>
              <div>
                <input type="submit" value="Submit Campus"/>
              </div>
            </fieldset>
          </form>
      </div>
    )
  }
  else{
    return <div></div>
  }

}

const mapStateToProps = function (state, ownProps) {
  const campusId = ownProps.match.params.campusId;

  return {
    campus: state.campuses.find(campus => campus.id === +campusId)
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  const campusId = ownProps.match.params.campusId;

  return {
    handleSubmit (e) {
      e.preventDefault();
      let campusName = e.target.campusName.value || '';
      let campusDescription = e.target.campusDescription.value || '';
      console.log({name: campusName, description: campusDescription});

      dispatch(editCampus(campusId, {name: campusName, description: campusDescription}, ownProps.history));
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCampus));
