var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css')

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(<div>Redux project</div>
	, 
	document.getElementById('main'));


//require('./redux-example.jsx');
require('./redux-todo-example.jsx');