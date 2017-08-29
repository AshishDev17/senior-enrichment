'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';

function Students (props){
  const students = props.students;
    //console.log(students);
    return (
      <div>
        <h2>ALL STUDENTS</h2>
        <button>ADD STUDENT</button>
        <table>
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
                <td><button>DELETE STUDENT </button></td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    )
}

//write code for connect
const mapStateToProps = function(state){
  return{
    students: state.students
  }
}

export default withRouter(connect(mapStateToProps)(Students));
