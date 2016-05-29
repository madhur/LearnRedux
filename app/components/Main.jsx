var React = require('react');
var Nav = require('./Nav.jsx');

var Main = React.createClass({

	render: function()
	{

		return (

			<div>Main component
			<Nav></Nav>

			{this.props.children}
			</div>
			);
	}


});

module.exports = Main;