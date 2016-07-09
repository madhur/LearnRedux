var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import { Provider } from 'react-redux'

var store = require('./store/configureStore').configure();
var MainWeatherApp = require('./components/MainWeatherApp.jsx');



// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css')

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(

	<Provider store={store}>
		<MainWeatherApp></MainWeatherApp>
	</Provider>
	, 
	document.getElementById('main'));


//require('./redux-example1.jsx');

//require('./redux-example3.jsx');
//require('./redux-todo-example.jsx');