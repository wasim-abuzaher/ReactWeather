var React = require('react');

var WeatherForm = React.createClass({
  onFromSubmit: function (e) {
    e.preventDefault();

    var cityName = this.refs.cityName.value;
    if(cityName.length > 0){
      this.refs.cityName.value = '';
      this.props.onNewCity(cityName);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFromSubmit}>
        <div><input type="text" ref="cityName"/></div>
        <div><button className="button hollow expanded">Get Weather</button></div>
      </form>
    )
  }
});

module.exports = WeatherForm;
