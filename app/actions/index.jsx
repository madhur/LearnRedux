var axios = require('axios');

export var addHobbyAction = function(name)
{
	return {
		type: 'ADD_HOBBY',
		hobby: name
	};
}

export var getWeatherAction = function()
{

	var weatherPromise = axios.get('http://api.openweathermap.org/data/2.5/weather?appid=fd8e51a8a23d22e2f1fb6733ff473fcd&units=metric&q=bangalor');

	return {
		type: 'GET_WEATHER',
		payload: {
			promise: weatherPromise
		}
	};

}

