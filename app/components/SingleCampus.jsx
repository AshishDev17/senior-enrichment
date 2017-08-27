'use strict';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class SingleCampus extends Component{

  render() {
    return (
      <div>
        <h2>NAME OF CAMPUS</h2>
        <button> EDIT CAMPUS</button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INDEX</td>
              <td><NavLink to="/students/:studentId">STUDENT NAME</NavLink></td>
              <td><button>DELETE </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


