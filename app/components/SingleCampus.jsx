'use strict';
import React, { Component } from 'react';
import store, {fetchStudentsForSingleCampus} from '../store';
import {NavLink} from 'react-router-dom';

export default class SingleCampus extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    let campusId = this.props.match.params.campusId;
    console.log(campusId);
    store.dispatch(fetchStudentsForSingleCampus(campusId));
    this.unsubscribe = store.subscribe(() => {this.setState(store.getState())})
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const students = this.state.students;
    //console.log(this.state.students);
    //console.log(this.state.students[0].campus);

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
}


