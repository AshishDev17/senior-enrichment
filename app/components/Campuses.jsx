'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteCampus} from '../store';
import {withRouter, NavLink} from 'react-router-dom';

function Campuses(props) {
  const campuses = props.campuses;
  return (
      <div>
        <div className="container">
          <h2>Campuses</h2>
        </div>
        <div className="row">
          <div className="col-xs-2"><NavLink to="/newcampus"><button className="btn btn-primary">CREATE NEW CAMPUS</button></NavLink></div>
          <div className="col-xs-offset-8 col-xs-2"> <NavLink to="/newstudent"><button className="btn btn-primary">CREATE NEW STUDENT</button></NavLink></div>
        </div>
        <hr/>
        <div className="row">
          {
          campuses.map((campus) => {
          return <div key={campus.id} className="col-xs-3 campus-font">
              <NavLink to={`/campuses/${campus.id}`}>

              <h4>{campus.name}</h4>
              </NavLink>
              <div>
              <p>{campus.description}</p>
              </div>
              <div>
                <button value={campus.id} onClick={props.handleClick} className="btn btn-danger">Delete {campus.name} </button>
              </div>
              <hr/>
            </div>
          })
        }
        </div>
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
