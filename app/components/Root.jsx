'use strict'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import Navbar from './Navbar';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import Students from './Students';
import SingleStudent from './SingleStudent';
import CreateCampus from './CreateCampus';


export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
              <Route exact path="/home" component={Campuses} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route path="/campuses/createcampus" component={CreateCampus} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={SingleStudent} />
            </Switch>
        </div>
        </div>
      </Router>
    )
  }
}


