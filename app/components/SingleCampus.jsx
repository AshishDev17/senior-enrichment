'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function SingleCampus(props) {
  //const students = props.students;
  //console.log(students);
  const campus = props.campus;
  console.log(campus);

     return (
      <div>
        <h2>{campus.name}</h2>
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
              campus.students.map((student, index) => {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td><NavLink to={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</NavLink></td>
                  <td><button value={student.id} onClick={props.handleClick}>DELETE STUDENT </button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  };



const mapStateToProps = function(state, ownProps){
  const campusId = ownProps.match.params.campusId;

  return{
    // students: state.students.filter((student) => {
    //   return student.campus.id === +campusId;
    // })

    campus: state.campuses.find(campus => campus.id === +campusId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick(e) {
      const studentId = e.target.value;
      console.log(studentId);
      dispatch(deleteStudent(studentId));
      //ownProps.history.push('/campuses')
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SingleCampus));
