var React = require('react');
var {getWeatherAction} = require('../actions/index.jsx');
var ReactRedux = require('react-redux');
var Redux = require('redux');

var Weather = React.createClass({

	componentDidMount: function()
	{
		this.props.getWeatherAction();
	},

	getWeather: function()
	{
		
	},

	render: function()
	{
		var that = this;
		
		function renderWeather()
		{
			if(that.props.weather.pending)
			{
				return(<div>Loading...</div>);
			}
			else
			{
				return(<div>{that.props.weather.temp}</div>);
			}

		}

		return (<div>
			<button onClick={this.getWeather}>Get weather</button>

			{renderWeather()}
			</div>)
	}

});

//module.exports = Weather;

function mapDispatchToProps(dispatch)
{
	return Redux.bindActionCreators({getWeatherAction}, dispatch);
}

function mapStateToProps(state) {

	return state;
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Weather);