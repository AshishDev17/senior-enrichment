'use strict';
import React, { Component } from 'react';
import { postStudent } from '../store';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function CreateStudent(props) {
  const campuses = props.campuses;

  return (
    <div>
      <div>
        <h2 className="heading">CREATE NEW STUDENT</h2>
      </div>
      <div className="row">
        <div className="col-xs-offset-3 form-width">
          <form onSubmit={props.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="">Student First Name: </label>
                <input type="text" className="form-control" name="studentFirstName" />
              </div>
              <div className="form-group">
                <label htmlFor="">Student Last Name: </label>
                <input type="text" className="form-control" name="studentLastName" />
              </div>
              <div className="form-group">
                <label htmlFor="">Student Age: </label>
                <input type="text" className="form-control" name="studentAge" />
              </div>
              <div className="form-group">
                <label htmlFor="">Student Gender: </label>
                <input type="text" className="form-control" name="studentGender" />
              </div>
              <div className="form-group">
                <label htmlFor="">Student Email: </label>
                <input type="email" className="form-control" name="studentEmail" />
              </div>
              <div className="form-group">
                <label htmlFor="">Campus Name: </label>
                <select name="campusName" className="form-control">
                  {
                    campuses.map((campus) => {
                      return <option key={campus.id} value={campus.id}>{campus.name}</option>
                    })
                  }
                  <option value=""></option>
                </select>
              </div>
              <div>
                <input type="submit" className="btn btn-primary" value="Submit Student" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit(e) {
      e.preventDefault();
      const student = {
        firstName: e.target.studentFirstName.value,
        lastName: e.target.studentLastName.value,
        age: e.target.studentAge.value,
        gender: e.target.studentGender.value,
        email: e.target.studentEmail.value,
        campusId: e.target.campusName.value
      }

      dispatch(postStudent(student, ownProps.history));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateStudent));
