'use strict';
import React, { Component } from 'react';
import {postStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function CreateStudent(props) {
  const campuses = props.campuses;
  console.log(campuses);
  return (
      <div>
        <h2>CREATE NEW STUDENT</h2>
        <form onSubmit={props.handleSubmit}>
            <fieldset>
              <legend>Create Student</legend>
              <div>
                <label htmlFor="">Student First Name: </label>
                <input type="text" name="studentFirstName"/>
              </div>
              <div>
                <label htmlFor="">Student Last Name: </label>
                <input type="text" name="studentLastName"/>
              </div>
              <div>
                <label htmlFor="">Student Age: </label>
                <input type="text" name="studentAge"/>
              </div>
              <div>
                <label htmlFor="">Student Gender: </label>
                <input type="text" name="studentGender"/>
              </div>
              <div>
                <label htmlFor="">Student Email: </label>
                <input type="text" name="studentEmail"/>
              </div>
              <div>
                <label htmlFor="">Campus Name: </label>
                <select name="campusName">
                  {
                    campuses.map((campus) => {
                      return <option key={campus.id} value={campus.id}>{campus.name}</option>
                    })
                  }
                  <option value=""></option>
                </select>
              </div>
              <div>
                <input type="submit" value="Submit Student"/>
              </div>
            </fieldset>
          </form>
      </div>
    )
}

const mapStateToProps = function(state, ownProps){
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
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

      //console.log(student);

      dispatch(postStudent(student, ownProps.history));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateStudent));
