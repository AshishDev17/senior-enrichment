'use strict';
import React, { Component } from 'react';
import store, {fetchSingleStudentFromServer} from '../store';
import {NavLink} from 'react-router-dom';

export default class SingleStudent extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    let studentId = this.props.match.params.studentId;
    //console.log(studentId);
    store.dispatch(fetchSingleStudentFromServer(studentId));
    this.unsubscribe = store.subscribe(() => {this.setState(store.getState())})
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const student = this.state.singleStudent;
    //console.log(student);

    return (
      <div>
        <h3>{student.firstName + ' ' + student.lastName}'s Page</h3>
        <button>EDIT STUDENT</button>
        <div>
          <label htmlFor="">Student Name: </label>
          <input type="text" name="studentName" value={student.firstName + ' ' + student.lastName} disabled="true"/>
        </div>
        <div>
          <label htmlFor="">Student Email: </label>
          <input type="text" name="studentEmail" value={student.email} disabled="true"/>
        </div>
        <div>
          <label htmlFor="">Campus Name: </label>
          {student.campus ? <NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink> : null}
        </div>
      </div>
    )
  }
}
