'use strict';
import React, { Component } from 'react';
import { postCampus } from '../store';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function CreateCampus(props) {
  return (
    <div>
      <h2 className="heading">CREATE NEW CAMPUS</h2>
      <div className="row">
        <div className="col-xs-offset-3 form-width">
          <form onSubmit={props.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label>Campus Name: </label>
                <input type="text" className="form-control" name="campusName" />
              </div>
              <div className="form-group">
                <label>Campus Description: </label>
                <input type="text" className="form-control" name="campusDescription" />
              </div>
              <div>
                <input type="submit" className="btn btn-primary" value="Submit Campus" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = function (state, ownprops) {
  return {
    state: state
    /*
      You should only map to state the parts of state that you need. Mapping everything will lead to unnecessary re-renders for this component. For this component, it doesn't look like you need state at all.
    */
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit(e) {
      e.preventDefault();
      let campusName = e.target.campusName.value || '';
      let campusDescription = e.target.campusDescription.value || '';

      /*
        If you have back-end validation that won't accept empty campus name and description, then you may want to implement front end validation.
      */

      dispatch(postCampus({ name: campusName, description: campusDescription }, ownProps.history));
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCampus));
