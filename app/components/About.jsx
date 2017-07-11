var React = require('react');

var About = (props) => {
  return(
    <div>
      <h3>About Weather Feather</h3>
      <p>Weather Feather is an amazing weather app built using the latest features in React.js and Foundation for Sites!</p>
      <p>Weather data are made available through: <a href="http://openweathermap.org/">Open Weather Map</a></p>
      <br/>
      <p>Testimonies</p>
      <blockquote>
        This app is just amazing, I use it all the time.
        <cite>Joe the Great</cite>
      </blockquote>
    </div>
  );
}
module.exports = About;
