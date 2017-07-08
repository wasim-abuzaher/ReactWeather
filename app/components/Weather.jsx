var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function(){
    return {
      cityName: ''
    };
  },
  getInitialState: function () {
    return {
      isLoading: false
    };
  }, handleNewCity: function(cityName) {
    var that = this;

    debugger;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(cityName).then(function (data) {
      that.setState({
        isLoading: false,
        cityName: data.cityName,
        temp: data.temp
      });
    }, function (errMsg) {
      that.setState({
        isLoading: false
      });
      alert(errMsg);
    });
  }, render: function () {
    var {isLoading, cityName, temp} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && cityName) {
        return <WeatherMessage cityName={cityName} temp={temp}/>;
      }
    }
    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
