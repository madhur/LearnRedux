var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
	//state = state || {name: 'Anonymous'}

	switch(action.type) {

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
		 	};

		 case 'ADD_MOVIE':
		 return {
		 		...state,
		 		movies: [
		 			...state.movies,
		 			{
		 				id: nextMovieId++,
		 				name: action.movie.name,
		 				genre: action.movie.genre

		 			}
		 		]
		 	};

		 case 'REMOVE_HOBBY':
		 	return{
		 		...state,
		 		hobbies: state.hobbies.filter(function(hobby){
		 			if(hobby.id == action.id)
		 				return false;

		 			return true;
		 		})
		 	};

		 case 'REMOVE_MOVIE':
		 	return{
		 		...state,
		 		movies: state.movies.filter(function(movie){
		 			if(movie.id == action.id)
		 				return false;

		 			return true;
		 		})
		 	};

		default:
			return state;
	}

	return state;
};

var nameReducer = (state='Anonymous', action) => {


};

var reducer = redux.combineReducers({
	name: nameReducer
});

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

store.dispatch( {
	type: 'CHANGE_NAME',
	name: 'Madhur'
});


store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Running'
});

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Walking'
});

store.dispatch({
	type: 'REMOVE_HOBBY',
	id:1
});

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
});



store.dispatch({
	type: 'ADD_MOVIE',
	movie: {
		name: '3 idiots',
		genre: 'Comedy'
	}
});

store.dispatch({
	type: 'ADD_MOVIE',
	movie: {
		name: 'Phobia',
		genre: 'horror'
	}
});

store.dispatch({
	type: 'ADD_MOVIE',
	movie: {
		name: 'Sadey CM',
		genre: 'Thriller'
	}
});

store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 3
});

