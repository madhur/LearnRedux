var React = require('react');
var {Link, IndexLink} = require('react-router')

var Nav = React.createClass({

	render: function()
	{

		return(
				<ul>
					 <li>
			      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			      </li>
			      
			      <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
			      <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>

				</ul>
			);
	}

});

module.exports = Nav;