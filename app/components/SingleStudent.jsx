'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';

function SingleStudent(props) {
  let student = props.singleStudent;

  if(student){
    return (
      <div>
        <h3>{student.firstName + ' ' + student.lastName}'s Page</h3>
        <NavLink to={`/editstudent/${student.id}`}><button>EDIT STUDENT</button></NavLink>
        <div>
          <label htmlFor="">Student Name: </label>
          <h4>{student.firstName + ' ' + student.lastName}</h4>
        </div>
        <div>
          <label htmlFor="">Student Email: </label>
          <h4>{student.email}</h4>
        </div>
        <div>
          <label htmlFor="">Campus Name: </label>
          <NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink>
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
