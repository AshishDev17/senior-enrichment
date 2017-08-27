'use strict';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Campuses extends Component{

  render() {
    return (
      <div>
        <h2>Campuses</h2>
        <button>CREATE</button>
        <div>
          <NavLink to="/campuses/:campusId">
          <img src="" alt=""/>
          <h4>CAMPUS NAME</h4>
          </NavLink>
          <div>
            <button>DELETE </button>
          </div>
        </div>
         <div>
          <NavLink to="/campuses/:campusId">
          <img src="" alt=""/>
          <h4>CAMPUS NAME</h4>
          </NavLink>
        </div>
        <div>
            <button>DELETE </button>
        </div>
      </div>
    )
  }
}
