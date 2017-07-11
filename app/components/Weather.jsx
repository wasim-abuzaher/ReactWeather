var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');
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

    this.setState({
      isLoading: true,
      errMsg: undefined
    });

    openWeatherMap.getTemp(cityName).then(function (data) {
      that.setState({
        isLoading: false,
        cityName: data.cityName,
        temp: data.temp
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errMsg: e.message
      });
      alert(errMsg);
    });
  }, render: function () {
    var {isLoading, cityName, temp, errMsg} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && cityName) {
        return <WeatherMessage cityName={cityName} temp={temp}/>;
      }
    }


    function renderErrorMessage() {
      if(typeof errMsg === 'string'){
        return (
          <ErrorModal message={errMsg}/>
        )
      }
    }

    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
