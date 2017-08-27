'use strict';
import React, { Component } from 'react';
import store, {fetchCampuses} from '../store';
import {NavLink} from 'react-router-dom';

export default class Campuses extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => {this.setState(store.getState())})
  }

  componentWillUnmount() {
    this.unsubscribe();
  }



  render() {
    const campuses = this.state.campuses;
    //console.log(campuses);
    return (
      <div>
        <h2>Campuses</h2>
        <button>CREATE</button>
        <hr/>
        {
          campuses.map((campus) => {
          return <div key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`}>
              <img src={campus.image} alt={campus.name}/>
              <h4>{campus.name}</h4>
              </NavLink>
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
}
