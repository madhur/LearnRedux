var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
};

var reducer = (state = stateDefault, action) => {
	//state = state || {name: 'Anonymous'}

	switch(action.type)
	{
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.newtext
			};

		default:
			return state;
	}
	return state;
};

var store = redux.createStore(reducer, redux.compose(

	window.devToolsExtension? window.devToolsExtension(): (f)=>{
		return f;
	}
	));

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	document.getElementById('main').innerHTML = state.searchText;

});
//unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch( {
	type: 'CHANGE_SEARCH_TEXT',
	newtext: 'Madhur'
});


store.dispatch( {
	type: 'CHANGE_SEARCH_TEXT',
	newtext: 'Dog'
});


store.dispatch( {
	type: 'CHANGE_SEARCH_TEXT',
	newtext: 'something else'
});
