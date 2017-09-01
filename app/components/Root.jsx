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
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';


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
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Campuses} />
              <Route path="/newcampus" component={CreateCampus} />
              <Route path="/newstudent" component={CreateStudent} />
              <Route path="/editcampus/:campusId" component={EditCampus} />
              <Route path="/editstudent/:studentId" component={EditStudent} />
              <Route exact path="/campuses" component={Campuses} />
              <Route exact path="/students" component={Students} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route path="/students/:studentId" component={SingleStudent} />
              <Route component={Campuses}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


