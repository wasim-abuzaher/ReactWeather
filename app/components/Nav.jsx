var React = require('react');
var { NavLink } = require('react-router-dom');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Coming Soon!');
  },
  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">The Weather Feather</li>
            <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink></li>
            <li><NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
            <li><NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search City"/></li>
              <li><input type="submit" className="button" value="Search"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
