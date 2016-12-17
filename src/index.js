import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App/app';
import 'animate.css';
import './common.css';


render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
  , document.getElementById('app')
);
