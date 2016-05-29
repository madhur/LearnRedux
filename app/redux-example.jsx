var redux = require('redux');

console.log('starting redux example');


// Name reducer and action generator
// ---------------------------------

var nameReducer = (state='Anonymous', action) => {

	switch(action.type)
	{
		case 'CHANGE_NAME':
			return action.name;

		default:
			return state;
	};

};

var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	};
};

var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby
	};
};

var removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	};
};

var nextHobbyId = 1;
var hobbiesReducer = (state=[], action) => {

	switch(action.type)
	{
		case 'ADD_HOBBY':
		return [
		 			...state,
		 			{
		 				id: nextHobbyId++,
		 				hobby: action.hobby
		 			}
		 		];

		case 'REMOVE_HOBBY':
		return state.filter(function(hobby){
		 			if(hobby.id == action.id)
		 				return false;

		 			return true;
		 		});

	}

	return state;

};

var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	};
};

var addMovie = (movie) => {
	return {
		type: 'ADD_MOVIE',
		movie
	}
}

var nextMovieId = 1;
var moviesReducer = (state=[], action) => {

	switch(action.type)
	{
		case 'ADD_MOVIE':
		return [
		 			...state,
		 			{
		 				id: nextMovieId++,
		 				movie: action.movie.name,
		 				genre: action.movie.genre
		 			}
		 		];

		case 'REMOVE_MOVIE':
		return state.filter(function(movie){
		 			if(movie.id == action.id)
		 				return false;

		 			return true;
		 		});

	}

	return state;

};

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
});

// var reducer = redux.combineReducers({
// 	name: nameReducer
// });

var store = redux.createStore(reducer, redux.compose(

	window.devToolsExtension? window.devToolsExtension(): (f)=>{
		return f;
	}
	));

// Subscribe to changes

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	document.getElementById('main').innerHTML = state.name;

	console.log('New State', store.getState());

});
//unsubscribe();



var currentState = store.getState();

console.log('currentState', currentState);

// store.dispatch( {
// 	type: 'CHANGE_NAME',
// 	name: 'Madhur'
// });

store.dispatch(changeName('Madhur'));

// store.dispatch({
// 	type: 'ADD_HOBBY',
// 	hobby: 'Running'
// });

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

// store.dispatch({
// 	type: 'ADD_HOBBY',
// 	hobby: 'Walking'
// });

// store.dispatch({
// 	type: 'REMOVE_HOBBY',
// 	id:1
// });

store.dispatch(removeHobby(1));

// store.dispatch({
// 	type: 'CHANGE_NAME',
// 	name: 'Emily'
// });

store.dispatch(changeName('Emily'));

// store.dispatch({
// 	type: 'ADD_MOVIE',
// 	movie: {
// 		name: '3 idiots',
// 		genre: 'Comedy'
// 	}
// });

store.dispatch(addMovie({name: '3 idiots', genre: 'Comedy'}));
store.dispatch(addMovie({
		name: 'Phobia',
		genre: 'horror'
	}));

store.dispatch(addMovie({
		name: 'Sadey CM',
		genre: 'Thriller'
	}));

// store.dispatch({
// 	type: 'ADD_MOVIE',
// 	movie: {
// 		name: 'Phobia',
// 		genre: 'horror'
// 	}
// });

// store.dispatch({
// 	type: 'ADD_MOVIE',
// 	movie: {
// 		name: 'Sadey CM',
// 		genre: 'Thriller'
// 	}
// });

// store.dispatch({
// 	type: 'REMOVE_MOVIE',
// 	id: 3
// });

store.dispatch(removeMovie(3));

