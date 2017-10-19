const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Switch = require('react-router-dom').Switch;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');

ReactDOM.render((
  <BrowserRouter history={hashHistory}>
    <Switch>
      <Route path="/" component={HelloWorld}/>
      <Route path="/about" component={About}/>
    </Switch>
  </BrowserRouter>), document.getElementById('main'));