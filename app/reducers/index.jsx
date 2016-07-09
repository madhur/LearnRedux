

export var hobbyReducer = function(state=[], action)
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

export var movieReducer = function(state=[], action)
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


export var weatherReducer = function(state={}, action)
{

	switch(action.type)
	{
		case 'GET_WEATHER_FULFILLED':
			return {
				pending: false,
				temp: action.payload.data.main.temp
			};

		case 'GET_WEATHER_PENDING':
			return { pending: true}

	}


	console.log(action);
	return state;

}