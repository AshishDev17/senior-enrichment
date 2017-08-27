'use strict'
import React, {Component} from 'react';
import {render} from 'react-dom';
//import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import store from './store';
import Root from './components/Root';
//import { Provider } from 'react-redux'

// render (
//   <Provider store={store}>
//     <Root/>
//   </Provider>,
//   document.getElementById('main')
// )

render(
  <Root />,
  document.getElementById('main')
)

