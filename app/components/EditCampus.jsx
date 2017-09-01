'use strict';
import React, { Component } from 'react';
import { editCampus } from '../store';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function EditCampus(props) {
  const campus = props.campus;

  if (campus) {
    return (
      <div>
        <div className="heading"><h2>Edit Campus {campus.name}</h2></div>
        <div className="row">
          <div className="col-xs-offset-3 form-width">
            <form onSubmit={props.handleSubmit}>
              <fieldset>
                <div className="form-group">
                  <label>Campus Name: </label>
                  <input type="text" className="form-control" name="campusName" defaultValue={campus.name} />
                </div>
                <div className="form-group">
                  <label>Campus Description: </label>
                  <input type="text" className="form-control" name="campusDescription" defaultValue={campus.description} />
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
  else {
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
    handleSubmit(e) {
      e.preventDefault();
      let campusName = e.target.campusName.value || '';
      let campusDescription = e.target.campusDescription.value || '';

      dispatch(editCampus(campusId, { name: campusName, description: campusDescription }, ownProps.history));
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCampus));
