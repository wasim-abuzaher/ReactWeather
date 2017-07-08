var React = require('react');
var { NavLink } = require('react-router-dom');

var Nav = (props) => {
  return(
    <div>
      <h2>Nav bar</h2>
      <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
      <NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
    </div>
  );
}
module.exports = Nav;
