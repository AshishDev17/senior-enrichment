'use strict';
import React, { Component } from 'react';
import store, {fetchStudents} from '../store';
import {NavLink} from 'react-router-dom';

export default class Students extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => {this.setState(store.getState())})
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const students = this.state.students;
    console.log(students);
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
}
