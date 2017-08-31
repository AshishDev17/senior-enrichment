'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';

function SingleStudent(props) {
  let student = props.singleStudent;

  if(student){
    return (
      <div>
        <div className="heading"><h3>{student.firstName + ' ' + student.lastName}'s Page</h3></div>
        <NavLink to={`/editstudent/${student.id}`}><button className="btn btn-info">EDIT STUDENT</button></NavLink>
        <div className="spacing">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Campus Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td><NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  else{
    return <div></div>
  }
}

const mapStateToProps = function(state, ownProps){
  const studentId = ownProps.match.params.studentId;

  return{
    singleStudent: state.students.find((student) => {
      return student.id === +studentId;
    })
  }
}

export default withRouter(connect(mapStateToProps)(SingleStudent));
