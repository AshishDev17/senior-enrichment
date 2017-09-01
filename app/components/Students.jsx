'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function Students (props){
  const students = [];

  //find only those students that exist in the 'campuses' state
  for(var i = 0; i < props.students.length; i++){
    for(var j = 0; j < props.campuses.length; j++){
     if(props.students[i].campusId === props.campuses[j].id){
       students.push(props.students[i]);
     }
    }
  }

    if(students){
        return (
          <div>
            <div className="heading">
              <h2>ALL STUDENTS</h2>
            </div>
            <div className="spacing">
              <NavLink to="/newstudent"><button className="btn btn-primary">CREATE NEW STUDENT</button></NavLink>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student Name </th>
                    <th>Campus Name</th>
                  </tr>
                </thead>
                <tbody>
                {
                  students.map((student, index) => {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td><NavLink to={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</NavLink></td>
                      <td><NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink></td>
                      <td><button value={student.id} onClick={props.handleClick} className="btn btn-danger">DELETE STUDENT </button></td>
                    </tr>
                  })
                }
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

const mapStateToProps = function(state){
  return{
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(e) {
      const studentId = e.target.value;
      dispatch(deleteStudent(studentId));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
