'use strict';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Students extends Component{

  render() {
    return (
      <div>
        <h2>ALL STUDENTS</h2>
        <button>CREATE STUDENT</button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name </th>
              <th>Campus Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INDEX</td>
              <td><NavLink to="/students/:studentId">STUDENT NAME</NavLink></td>
              <td><NavLink to="/campuses/:campusId">CAMPUS NAME</NavLink></td>
              <td><button>DELETE </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
