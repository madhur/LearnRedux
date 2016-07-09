var React = require('react');
var ReactRedux = require('react-redux');
var Redux = require('redux');
var {addHobbyAction} = require('../actions/index.jsx');

var Hobbies = React.createClass({

	componentDidMount: function()
	{
		this.props.addHobbyAction('walking');
		this.props.addHobbyAction('running');
		this.props.addHobbyAction('swimming');
		console.log(this.props.hobby);

	}
	,
	render: function()
	{
		console.log("Rending",this.props);
		if(this.props && this.props.hobby)
		{
			console.log(this.props.hobby);
			return (<div>{this.props.hobby[0]}</div>);
		}
		return (<div>Hobbies</div>)
	}

});

//module.exports = Hobbies;

function mapDispatchToProps(dispatch)
{
	return Redux.bindActionCreators({addHobbyAction}, dispatch);
}

function mapStateToProps(state) {

	return state;
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Hobbies);