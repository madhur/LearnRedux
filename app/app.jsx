var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Weather = require('./components/Weather.jsx');
var Examples = require('./components/Examples.jsx');
var About = require('./components/About.jsx');
var Main = require('./components/Main.jsx');


// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css')

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
		<Router history={hashHistory}>
				<Route path="/" component={Main} >
					<Route path="about" component={About} />
					<Route path="examples" component={Examples} />
					<IndexRoute component={Weather}/>
				</Route>
		</Router>
	, 
	document.getElementById('main'));