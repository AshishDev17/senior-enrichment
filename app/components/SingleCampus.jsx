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
          <div className="heading">
            <h2>{campus.name}</h2>
          </div>
          <div className="row">
            <div className="col-xs-3 text-center"><NavLink to={`/editcampus/${campus.id}`}><button className="btn btn-info"> EDIT CAMPUS</button></NavLink></div>
            <div className="col-xs-offset-2 col-xs-3 text-center"><NavLink to="/newstudent"><button className="btn btn-info">ADD NEW STUDENT</button></NavLink></div>
          </div>
          <table className="table table-margin">
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
                    <td><button value={student.id} onClick={props.handleClick} className="btn btn-danger">>DELETE STUDENT </button></td>
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
