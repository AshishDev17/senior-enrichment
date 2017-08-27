'use strict';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class SingleCampus extends Component{

  render() {
    return (
      <div>
        <h2>NAME OF CAMPUS</h2>
        <div>
          <NavLink to="/students/:studentId">
          <h5>STUDENT NAME</h5>
          </NavLink>
          <NavLink to="/students/:studentId">
          <h5>STUDENT NAME</h5>
          </NavLink>
          <NavLink to="/students/:studentId">
          <h5>STUDENT NAME</h5>
          </NavLink>
        </div>
      </div>
    )
  }
}
