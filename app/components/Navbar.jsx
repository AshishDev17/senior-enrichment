'use strict';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/home">Margaret Hamilton Interplanetary Academy</NavLink>
          </div>
          <div  id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to="/campuses">Campuses</NavLink></li>
              <li><NavLink to="/students">Students</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
