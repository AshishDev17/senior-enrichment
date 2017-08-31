'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function SingleCampus(props) {
  const campus = props.campus;

    if(campus){
      return (
        <div>
          <h2>{campus.name}</h2>
          <NavLink to={`/editcampus/${campus.id}`}><button> EDIT CAMPUS</button></NavLink>
          <NavLink to="/newstudent"><button>ADD NEW STUDENT</button></NavLink>
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
    }
    else{
      return <div></div>
    }

  };



const mapStateToProps = function(state, ownProps){
  const campusId = ownProps.match.params.campusId;

  return{
        campus: state.campuses.find(campus => campus.id === +campusId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick(e) {
      const studentId = e.target.value;
      dispatch(deleteStudent(studentId));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SingleCampus));
