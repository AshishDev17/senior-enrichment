'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';

function SingleStudent(props) {
  let student = props.singleStudent;
  //console.log(student);
  if(student){
    return (
      <div>
        <h3>{student.firstName + ' ' + student.lastName}'s Page</h3>
        <button>EDIT STUDENT</button>
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
  console.log('what is state?', state);
  return{
    singleStudent: state.students.find((student) => {
      return student.id === +studentId;
    })
  }
}

export default withRouter(connect(mapStateToProps)(SingleStudent));
