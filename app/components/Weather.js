var React = require('react');
var WeatherForm = require('./WeatherForm.js');
var WeatherMessage = require('./WeatherMessage.js');
var Weather = React.createClass({
  getInitialState(){
    return {city: 'Hanoi', temp: 28}
  },
  setStatus(cityName){
    this.setState({city: cityName, temp: 30});
  },
  render(){
    return (
      <div>
          <WeatherForm setWeather={this.setStatus}/>
          <WeatherMessage city={this.state.city} temp={this.state.temp}/>
      </div>
    );
  }
});
module.exports = Weather;
