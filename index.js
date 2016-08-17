import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './src/app'

// Global Styles
import './assets/styles/bootstrap.css'
import './assets/styles/index.less'

// Components
import Expeditions from './src/pages/expeditions.js';
import About from './src/pages/about.js';
import Donate from './src/pages/donate.js';
import Account from './src/pages/account.js';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/expeditions" component={Expeditions}/>
      <Route path="/about" component={About}/>
      <Route path="/donate" component={Donate}/>
      <Route path="/account" component={Account}/>
    </Route>
  </Router>
), document.getElementById('app'));
