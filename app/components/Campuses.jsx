'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';

function Campuses(props) {
  const campuses = props.campuses;
  //console.log(campuses);
  return (
      <div>
        <h2>Campuses</h2>
        <div>
          <NavLink to="/newCampus">CREATE NEW CAMPUS</NavLink>
        </div>
        <hr/>
        {
          campuses.map((campus) => {
          return <div key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`}>
              <img src={campus.image} alt={campus.name}/>
              <h4>{campus.name}</h4>
              </NavLink>
              <div>
              <p>{campus.description}</p>
              </div>
              <div>
                <button>Delete {campus.name} </button>
              </div>
              <hr/>
            </div>
          })
        }
      </div>
    )
}

//write code for connect
const mapStateToProps = function(state){
  return{
    campuses: state.campuses
  }
}

export default withRouter(connect(mapStateToProps)(Campuses));
