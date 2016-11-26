var React = require('react');

var WeatherMessage = (props) =>
<h1 className="text-center">{props.city} is now {props.temp}</h1>

module.exports = WeatherMessage;
