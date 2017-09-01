'use strict';
import React, { Component } from 'react';
import { editStudent } from '../store';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function CreateStudent(props) {
  const campuses = props.campuses;
  const student = props.student;

  if (student) {
    return (
      <div>
        <div className="heading"><h2>Edit {student.firstName + ' ' + student.lastName}</h2></div>
        <div className="row">
          <div className="col-xs-offset-3 form-width">
            <form onSubmit={props.handleSubmit}>
              <fieldset>
                <div className="form-group">
                  <label>Student First Name: </label>
                  <input type="text" className="form-control" name="studentFirstName" defaultValue={student.firstName} />
                </div>
                <div className="form-group">
                  <label>Student Last Name: </label>
                  <input type="text" className="form-control" name="studentLastName" defaultValue={student.lastName} />
                </div>
                <div className="form-group">
                  <label>Student Age: </label>
                  <input type="text" className="form-control" name="studentAge" defaultValue={student.age} />
                </div>
                <div className="form-group">
                  <label>Student Gender: </label>
                  <select name="studentGender" className="form-control" defaultValue={student.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Student Email: </label>
                  <input type="text" className="form-control" name="studentEmail" defaultValue={student.email} />
                </div>
                <div className="form-group">
                  <label>Campus Name: </label>
                  <select name="campusName" className="form-control" defaultValue={student.campus.id}>
                    {
                      campuses.map((campus) => {
                        return <option key={campus.id} value={campus.id}>{campus.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary" value="Submit Student" />
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
  const studentId = ownProps.match.params.studentId;
  return {
    campuses: state.campuses,
    student: state.students.find(student => student.id === +studentId)
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
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
