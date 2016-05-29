var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
};

var reducer = (state = stateDefault, action) => {
	//state = state || {name: 'Anonymous'}

	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);