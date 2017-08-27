'use strict';
import React, { Component } from 'react';
//import {NavLink} from 'react-router-dom';

export default class SingleStudent extends Component{

  render() {
    return (
      <div>
        <button>EDIT STUDENT</button>
        <div>
          <label htmlFor="">Student Name</label>

        </div>
        <div>
          <label htmlFor="">Student Email</label>
        </div>
        <div>
          <label htmlFor="">Campus Name</label>
        </div>
      </div>
    )
  }
}
