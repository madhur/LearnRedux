var redux = require('redux');
var {hobbyReducer, movieReducer, weatherReducer} = require('./../reducers/index')
import promiseMiddleware from 'redux-promise-middleware';

export var configure = () => {

var reducer = redux.combineReducers({

	hobby: hobbyReducer,
	movie: movieReducer,
	weather: weatherReducer
})

var store = redux.createStore(reducer, redux.compose(
			redux.applyMiddleware(promiseMiddleware()),
			window.devToolsExtension? window.devToolsExtension(): f => f
		));

	return store;
};


