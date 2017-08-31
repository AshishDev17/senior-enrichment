'use strict';
import React, { Component } from 'react';
import {editStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function CreateStudent(props) {
  const campuses = props.campuses;
  const student = props.student;

  if(student){
    return (
      <div>
        <h2>EDIT NEW STUDENT</h2>
        <form onSubmit={props.handleSubmit}>
            <fieldset>
              <legend>Edit Student</legend>
              <div>
                <label htmlFor="">Student First Name: </label>
                <input type="text" name="studentFirstName" defaultValue={student.firstName}/>
              </div>
              <div>
                <label htmlFor="">Student Last Name: </label>
                <input type="text" name="studentLastName" defaultValue={student.lastName}/>
              </div>
              <div>
                <label htmlFor="">Student Age: </label>
                <input type="text" name="studentAge" defaultValue={student.age}/>
              </div>
              <div>
                <label htmlFor="">Student Gender: </label>
                <input type="text" name="studentGender" defaultValue={student.gender}/>
              </div>
              <div>
                <label htmlFor="">Student Email: </label>
                <input type="text" name="studentEmail" defaultValue={student.email}/>
              </div>
              <div>
                <label htmlFor="">Campus Name: </label>
                <select name="campusName" defaultValue={student.campus.id}>
                  {
                    campuses.map((campus) => {
                      return <option key={campus.id} value={campus.id}>{campus.name}</option>
                    })
                  }
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
  else{
    return <div></div>
  }

}

const mapStateToProps = function(state, ownProps){
  const studentId = ownProps.match.params.studentId;
  return {
    campuses: state.campuses,
    student: state.students.find(student => student.id === +studentId)
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  const studentId = ownProps.match.params.studentId;

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

      dispatch(editStudent(studentId, student, ownProps.history));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateStudent));
