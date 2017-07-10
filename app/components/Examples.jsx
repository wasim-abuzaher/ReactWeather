var React = require('react');
var { NavLink } = require('react-router-dom');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><NavLink exact to='/?location=toronto'>Toronto, ON</NavLink></li>
        <li><NavLink exact to='/?location=ottawa'>Ottawa, ON</NavLink></li>
      </ol>
    </div>

  );
}
module.exports = Examples;
