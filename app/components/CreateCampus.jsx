'use strict';
import React, { Component } from 'react';
import {postCampus} from '../store';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function CreateCampus (props) {
     return (
      <div>
        <h2>CREATE NEW CAMPUS</h2>
        <form onSubmit={props.handleSubmit}>
            <fieldset>
              <legend>Create Campus</legend>
              <div>
                <label htmlFor="">Campus Name: </label>
                <input type="text" name="campusName"/>
              </div>
              <div>
                <label htmlFor="">Campus Description: </label>
                <input type="text" name="campusDescription"/>
              </div>
              <div>
                <input type="submit" value="Submit Campus"/>
              </div>
            </fieldset>
          </form>
      </div>
    )
}

const mapStateToProps = function (state, ownprops) {
  return {
    state: state
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit (e) {
      e.preventDefault();
      let campusName = e.target.campusName.value || '';
      let campusDescription = e.target.campusDescription.value || '';
      console.log({name: campusName, description: campusDescription});

      dispatch(postCampus({name: campusName, description: campusDescription}, ownProps.history));
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCampus));
