var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
	//state = state || {name: 'Anonymous'}

	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);




// Pure function
// function add(a,b)
// {
// 	return a + b;
// }


// var a = 3;
// // Not pure function
// function add(b)
// {
// 	return a + b;
// }

// var result;
// // Not a pure function
// function add (a, b) 
// {
// 	result = a + b;
// 	return result;
// }

// // Not a pure function
// function add (a, b)
// {
// 	return a + b + new date().getSeconds();
// }


// function changeProp(obj)
// {
// 	return {
// 		...obj,
// 		name: 'Jen'
// 	};	
// 	// obj.name = 'Jen';
// 	// return obj;
// }

// changeProp ({
// 	name: 'Andrew'
// });

// console.log(res);