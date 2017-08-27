'use strict';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
  render() {
    return (
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/campuses">Campuses</NavLink>
        <NavLink to="/students">Students</NavLink>
      </nav>
    )
  }
}
