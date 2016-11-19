var React = require('react');

var WeatherMessage = (props) =>
<h1>{props.city} is now {props.temp}</h1>

module.exports = WeatherMessage;
