'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteStudent} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function SingleCampus(props) {
  const campusId = +props.campusId;
  //get all students from students state whose campusId is equal to campusId passed in params
  const students = props.students.filter(student => student.campusId === campusId);
  //get campus from campuses state whose id is equal to campusId passed in params
  const campus=  props.campuses.find(campus => campus.id === campusId);
  //replacing the old students array of the campus with the new students array that have the new added student

    if(campus){
      campus.students = students;

      return (
        <div>
          <div className="heading">
            <h2>{campus.name}</h2>
          </div>
          <div className="row">
            <div className="col-xs-2"><NavLink to={`/editcampus/${campus.id}`}><button className="btn btn-primary"> EDIT CAMPUS</button></NavLink></div>
            <div className="col-xs-2"><NavLink to="/newstudent"><button className="btn btn-primary">CREATE NEW STUDENT</button></NavLink></div>
          </div>
          <table className="table table-margin">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name </th>
                <th>Student Age</th>
                <th>Student Gender</th>
                <th>Student Email</th>
              </tr>
            </thead>
            <tbody>
                {
                campus.students.map((student, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td><NavLink to={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</NavLink></td>
                    <td>{student.age}</td>
                    <td>{student.gender}</td>
                    <td>{student.email}</td>
                    <td><button value={student.id} onClick={props.handleClick} className="btn btn-danger">DELETE STUDENT </button></td>
                  </tr>
                })

                /*
                  Maybe this could be a separate JSX component - maybe something like StudentRowItem

                  Also, try avoid using the array index as the key when you map over the array:
                  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
                */
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
  return{
        campusId: ownProps.match.params.campusId,
        campuses: state.campuses,
        students: state.students
  }

  /*
    If we created a selectedCampus property on our campuses state, we could use it here, instead of needing to grab all campuses and all students.
  */
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const campusId = ownProps.match.params.campusId;
  return {
    handleClick(e) {
      const studentId = e.target.value;
      dispatch(deleteStudent(studentId));
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SingleCampus));
