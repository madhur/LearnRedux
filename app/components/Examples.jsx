var React = require('react');

var Examples = React.createClass({


	getInitialState: function()
	{
		return {
			count: 0
		}

	},

	update: function()
	{
		var count = this.state.count;
		this.setState({

			count: count + 1
		});

	},


	render: function()
	{

		return <div>Examples component
			<button onClick={this.update}>button</button>
			{this.state.count}
		</div>;
	},

	componentDidMount: function()
	{
		console.log('componentDidMount');

	},

	componentWillMount: function()
	{
		console.log('componentWillMount');
	},

	shouldComponentUpdate: function(nextProps, nextState)
	{
		console.log('shouldComponentUpdate');
		return true;
	},

	componentWillUpdate : function(nextProps, nextState)
	{
		console.log(nextProps, nextState);
	},

	componentDidUpdate: function(  prevProps,  prevState)
	{
		console.log(prevProps, prevState);
	},
	componentWillUnmount: function()
	{
		console.log('unmount');
	}


});

module.exports = Examples;