var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div >
        <div className="grid-x frame">
          <div className="cell medium-6 large-4">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
module.exports = Main;
