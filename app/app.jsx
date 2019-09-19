import { hashHistory, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HelloWorld}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>), document.getElementById('main'));