'use strict';
import React, { Component } from 'react';
import store from '../store';
import {NavLink} from 'react-router-dom';

export default class CreateCampus extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    //store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => {this.setState(store.getState())})
  }

  componentWillUnmount() {
    this.unsubscribe();

  }

  render() {

    return (
      <div>
        <h2>CREATE NEW CAMPUS</h2>
        <form>
            <fieldset>
              <legend>Create Campus</legend>
              <div>
                <label htmlFor="">Campus Name: </label>
                <input type="text"/>
              </div>
              <div>
                <label htmlFor="">Campus Image: </label>
                <input type="text"/>
              </div>
              <div>
                <label htmlFor="">Campus Description: </label>
                <input type="text"/>
              </div>
              <div>
                <input type="submit" value="Submit Campus"/>
              </div>
            </fieldset>
          </form>
      </div>
    )
  }
}
