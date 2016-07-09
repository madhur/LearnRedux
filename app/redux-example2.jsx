var redux  = require('redux');

//

var hobbyReducer = function(state=[], action)
{
	switch(action.type)
	{

		case 'ADD_HOBBY':
		console.log('inside add hobby');
			return [
					...state,
					action.hobby
				];
			

		case 'REMOVE_ALL_HOBBY':
			console.log('remove all hobie inside hobby reducer');
			return [];

		default:
			return state;
	}
	return state;
};

var movieReducer = function(state=[], action)
{
	switch(action.type)
	{

		case 'ADD_MOVIE':
			return  [...state, action.name];

		default:
			return state;	
			
	}
	return state;
};


var addHobbyAction = function(name)
{
	return {
		type: 'ADD_HOBBY',
		hobby: name
	};
}

var reducer = redux.combineReducers({

	hobby: hobbyReducer,
	movie: movieReducer
})
var store = redux.createStore(reducer, redux.compose(
			//redux.applyMiddleware(promiseMiddleware()),
			window.devToolsExtension? window.devToolsExtension(): f => f
		));

console.log("my store", store.getState());

store.dispatch(addHobbyAction('running'));
store.dispatch(addHobbyAction('walking'));
store.dispatch(addHobbyAction('swimming'));


console.log("add hobby", store.getState());

store.dispatch({

	type: 'REMOVE_ALL_HOBBY'
});

console.log("remove all hobby", store.getState());
store.dispatch({

	type: 'ADD_MOVIE',
	name: 'Sultan'
});

console.log("add movie", store.getState());

store.dispatch({

	type: 'REMOVE_ALL_HOBBY'
});

console.log("remove all hobby", store.getState());

