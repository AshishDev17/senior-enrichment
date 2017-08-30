'use strict'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store, {fetchCampuses, fetchStudents} from '../store';
import Navbar from './Navbar';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import Students from './Students';
import SingleStudent from './SingleStudent';
import CreateCampus from './CreateCampus';
import CreateStudent from './CreateStudent';


export default class Root extends Component {

  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
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
              <Route path="/newcampus" component={CreateCampus} />
              <Route path="/newstudent" component={CreateStudent} />
              <Route exact path="/campuses" component={Campuses} />
              <Route exact path="/students" component={Students} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route path="/students/:studentId" component={SingleStudent} />
            </Switch>
        </div>
        </div>
      </Router>
    )
  }
}


