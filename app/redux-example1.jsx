var redux  = require('redux');
import promiseMiddleware from 'redux-promise-middleware';
var axios = require('axios');
console.log('starting redux example');

function changeProp(obj)
{
	return {
		...obj,
		name: 'jen'
	};

	//obj.name='jen';
	//return obj;
}

var startingValue = {
	name: 'Andrew',
	age: 25
};

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);


var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = function (state = {name: 'Anonymous', hobbies: [], movies: []}, action) {

	console.log(action);
	switch(action.type)
	{
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};

		case 'ADD_HOBBY': 
			return {
				...state,
				hobbies: [
					...state.hobbies, 
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}

				]
			}

		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
				...state.movies,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre

				}
				]
			}

		case 'FETCH_DATA_FULFILLED':
			console.log(state);

			return {
				...state,
				data: action.payload.data
			};

		default:
			return state;
	}
}
var store = redux.createStore(reducer,  redux.compose(
			redux.applyMiddleware(promiseMiddleware()),
			window.devToolsExtension? window.devToolsExtension(): f => f
		));

// subscribe to changes

store.subscribe(function(){

	var state = store.getState();

	console.log('state is ', state);
	document.getElementById('name').innerText=state.name;
})

var currentState = store.getState();

console.log('currentState', currentState);


var action = {
	type: 'CHANGE_NAME',
	name: 'Andrew'
};

store.dispatch(action);

console.log('Name changed', store.getState());

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Madhur'
});

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Running'
});

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Mad Max',
	genre: 'Action'
});

var request = axios.get('/data');

store.dispatch({
	type: 'FETCH_DATA',
	payload: {
		promise: request
	}
});