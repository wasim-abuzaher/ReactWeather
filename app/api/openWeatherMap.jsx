var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5c4e7999e6a060296c717cadd18f6aa6';

module.exports = {
  getTemp: function (cityName) {
    var encodedLocation = encodeURIComponent(cityName);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(err.response.data.message);
      } else {
        return {temp: res.data.main.temp, cityName: res.data.name};
      }
    }, function (err) {
      throw new Error(err.response.data.message);
    });
  }
}
