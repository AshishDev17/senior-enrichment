'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteCampus} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function Campuses(props) {
  const campuses = props.campuses;
  return (
      <div>
        <h2>Campuses</h2>
        <div>
          <NavLink to="/newcampus"><button>CREATE NEW CAMPUS</button></NavLink>
          <NavLink to="/newstudent"><button>ADD NEW STUDENT</button></NavLink>
        </div>
        <hr/>
        {
          campuses.map((campus) => {
          return <div key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`}>

              <h4>{campus.name}</h4>
              </NavLink>
              <div>
              <p>{campus.description}</p>
              </div>
              <div>
                <button value={campus.id} onClick={props.handleClick}>Delete {campus.name} </button>
              </div>
              <hr/>
            </div>
          })
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  return{
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(e) {
      const campusId = e.target.value;
      console.log(campusId);
      dispatch(deleteCampus(campusId));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campuses));
