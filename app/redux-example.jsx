var redux = require('redux');


console.log('starting redux example');

var actions = require('./actions/index')
var store = require('./store/configureStore').configure();

// Subscribe to changes

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	//document.getElementById('main').innerHTML = state.name;

	console.log('New State', store.getState());

	if(state.map.isFetching){
		document.getElementById('main').innerHTML = 'Loading...';
	}
	else if(state.map.url)
	{
		document.getElementById('main').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
	}

});

store.dispatch(actions.fetchLocation());

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch(actions.changeName('Madhur'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(1));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie({name: '3 idiots', genre: 'Comedy'}));
store.dispatch(actions.addMovie({
		name: 'Phobia',
		genre: 'horror'
	}));

store.dispatch(actions.addMovie({
		name: 'Sadey CM',
		genre: 'Thriller'
	}));

store.dispatch(actions.removeMovie(3));

