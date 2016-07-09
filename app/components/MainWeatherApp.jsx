
var React = require('react');
//var Hobbies = require('./Hobies.jsx');
import Hobbies from './Hobies.jsx';

var Movies = require('./Movies.jsx');
import Weather from './Weather.jsx';
//var Weather = require('./Weather.jsx');

var MainWeatherApp = React.createClass({


	render: function()
	{

		return (
				<div>
					<Hobbies></Hobbies>
					<Movies></Movies>
					<Weather></Weather>

				</div>
			)

	}

});

module.exports = MainWeatherApp;
