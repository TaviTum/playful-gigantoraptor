import { hashHistory, Route, BrowserRouter, Redirect } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');
const Penguin = require('./components/Penguin');

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
      <Route path="/about" component={About}/>
      <Route path="/main" component={HelloWorld}/>
      <Route path="/penguin" component={Penguin}/>
    </div>
  </BrowserRouter>), document.getElementById('main'));