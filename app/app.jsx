const React = require('react');
const ReactDOM = require('react-dom');
const BrowserRouter = require('react-router-dom').BrowserRouter;

/* Import Components */
const HelloWorld = require('./components/HelloWorld');

ReactDOM.render(<HelloWorld/>, document.getElementById('main'));