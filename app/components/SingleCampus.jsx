'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';

function SingleCampus(props) {
  const students = props.students;
  console.log(students);

  return (
    <div>
      <h2>Campus Name</h2>
      <button> EDIT CAMPUS</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name </th>
          </tr>
        </thead>
        <tbody>
            {
            students.map((student, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td><NavLink to={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</NavLink></td>
                <td><button>DELETE </button></td>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
    )
}

const mapStateToProps = function(state, ownProps){
  const campusId = ownProps.match.params.campusId;

  return{
    students: state.students.filter((student) => {
      return student.campus.id === +campusId;
    })
  }
}

export default withRouter(connect(mapStateToProps)(SingleCampus));
