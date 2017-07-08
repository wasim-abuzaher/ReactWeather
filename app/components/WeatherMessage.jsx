var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {

  }
});

var WeatherMessage = (props) => {
  var {cityName, temp} = props;
  return (
    <div>
      <h3>It's {temp} in {cityName}!</h3>
    </div>
  );
}

module.exports = WeatherMessage;
